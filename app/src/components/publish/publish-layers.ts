// AUTHENTICATION
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import esriId from "@arcgis/core/identity/IdentityManager";
import Portal from "@arcgis/core/portal/Portal";

// ARCGIS CORE
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

// ARCGIS REST
import { ArcGISIdentityManager } from "@esri/arcgis-rest-request";
import {
  getService,
  createFeatureService,
  addToServiceDefinition,
} from "@esri/arcgis-rest-feature-service";

// CONFIGS
import indicators from "./indicators";
import { indicatorsSchema, countiesSchema, dataSchema } from "./schemas";

const appId = "okVQ4077SDRynX9r";
const portalUrl = "https://prof-services.maps.arcgis.com/";
const layerUrl =
  "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/2";
const name = "in_mem_fl_census_data";
const description =
  "Census data for the United States used for a demo of in-memory feature layers";

/**
 * Gets all the features from a feature layer
 * - Recursively queries the feature layer
 * @param results the results (for recursion)
 * @returns a promise that resolves to an array of features
 */
const getFeatures = async (
  layer: __esri.FeatureLayer,
  query?: __esri.Query,
  results: __esri.Graphic[] = []
): Promise<__esri.Graphic[]> => {
  try {
    const response = await layer.queryFeatures({
      num: 1000,
      outFields: ["*"],
      returnGeometry: true,
      start: results.length,
      where: "1=1",
      ...query,
    });
    const allResults = results.concat(response.features);
    if (response.exceededTransferLimit && response.features.length) {
      return await getFeatures(layer, query, allResults);
    }
    return allResults;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Publishes a feature service with multiple feature layers
 */
export const publishLayers = async () => {
  console.log("Initiated script...");

  let portal: __esri.Portal | null = null;
  let auth: ArcGISIdentityManager | null = null;

  try {
    // Define portal and authentication
    const info = new OAuthInfo({ appId, preserveUrlHash: true });
    esriId.registerOAuthInfos([info]);
    portal = new Portal({ url: portalUrl, authMode: "immediate" });
    await portal.load();
    auth = new ArcGISIdentityManager({
      token: esriId.findCredential(portal.url)?.token,
      clientId: appId,
      portal: portal.restUrl,
      username: portal.user.username,
    });
    console.log({ info, portal, auth, esriId });

    // Define layer and query features
    console.log("Fetching features...");
    const layer = new FeatureLayer({
      url: layerUrl,
    });
    await layer.load();
    const fieldNames = layer.fields.map((field) => field.name);
    console.log({ layer, fieldNames });
    const features = await getFeatures(layer);
    console.log({ features });

    // County features
    const counties = features.map((feature, index) => {
      const { attributes } = feature;
      return new Graphic({
        attributes: {
          OBJECTID: index + 1,
          STATE_FIPS: attributes["STATE_FIPS"],
          COUNTY_FIPS: attributes["CNTY_FIPS"],
          FIPS: attributes["FIPS"],
          NAME: attributes["NAME"],
          STATE_NAME: attributes["STATE_NAME"],
        },
        geometry: feature.geometry,
      });
    });
    console.log({ counties });

    // Indicator Data features
    let data: __esri.Graphic[] = [];
    const indicatorNames = indicators.map((indicator) => indicator.INDICATOR);
    features.map((feature) => {
      const { attributes } = feature;
      Object.keys(attributes).forEach((attribute) => {
        let indicator = attribute;
        let year = 2000;
        if (attribute.includes("2000")) {
          indicator = attribute.replace("2000", "");
        }
        if (attribute.includes("2007")) {
          indicator = attribute.replace("2007", "");
          year = 2007;
        }
        if (attribute.includes("97")) {
          indicator = attribute.replace("97", "");
          year = 1997;
        }
        if (!indicatorNames.includes(indicator)) return;
        data.push(
          new Graphic({
            attributes: {
              STATE_FIPS: attributes["STATE_FIPS"],
              COUNTY_FIPS: attributes["CNTY_FIPS"],
              FIPS: attributes["FIPS"],
              INDICATOR: indicator,
              VALUE: attributes[attribute],
              YEAR: year,
            },
          })
        );
      });
    });
    console.log({ data });

    // Indicator features
    const indicatorFeatures = indicators.map((indicator) => {
      return new Graphic({
        attributes: {
          INDICATOR: indicator.INDICATOR,
          NAME_EN: indicator.NAME_EN,
          NAME_ES: indicator.NAME_ES,
        },
      });
    });
    console.log({ indicatorFeatures });

    // Publish layers
    // console.log("Publishing layers...");
    // const serviceRes = await createFeatureService({
    //   authentication: auth,
    //   credentials: "include",
    //   owner: portal.user.username,
    //   item: { name, description, spatialReference: { wkid: 3857 } },
    // });
    // const serviceUrl = serviceRes.serviceurl;

    // OR find layer
    const serviceUrl =
      "https://services1.arcgis.com/wQnFk5ouCfPzTlPw/arcgis/rest/services/in_mem_fl_census_data/FeatureServer";
    const serviceRes = await getService({
      authentication: auth,
      url: serviceUrl,
    });

    console.log({ serviceRes });

    // Add layers to service
    // console.log("Adding layers to service...");
    // const addToRes = await addToServiceDefinition(serviceUrl, {
    //   authentication: auth,
    //   // @ts-expect-error
    //   layers: [{ name: "Counties", ...countiesSchema }],
    //   tables: [
    //     { name: "Indicators", ...indicatorsSchema },
    //     { name: "Data", ...dataSchema },
    //   ],
    // });
    // console.log({ addToRes });
    // if (!addToRes.success) {
    //   throw new Error("Failed to add layers to service");
    // }

    // Define and load layers
    console.log("Loading layers...");
    const countiesLayer = new FeatureLayer({
      url: `${serviceUrl}/0`,
    });
    const indicatorsLayer = new FeatureLayer({
      url: `${serviceUrl}/1`,
    });
    const dataLayer = new FeatureLayer({
      url: `${serviceUrl}/2`,
    });
    await countiesLayer.load();
    await indicatorsLayer.load();
    await dataLayer.load();

    // await indicatorsLayer.applyEdits({ addFeatures: indicatorFeatures });

    // Apply counties data edits in chunks
    console.log("Adding county features...");
    const countyChunkSize = 50;
    for (let i = 0; i < counties.length; i += countyChunkSize) {
      const chunk = counties.slice(i, i + countyChunkSize);
      await countiesLayer.applyEdits({ addFeatures: chunk });
    }
    console.log("Added all county features");

    // Apply data edits in chunks
    // console.log("Adding data features...");
    // const dataChunkSize = 500;
    // for (let i = 0; i < data.length; i += dataChunkSize) {
    //   const chunk = data.slice(i, i + dataChunkSize);
    //   await dataLayer.applyEdits({ addFeatures: chunk });
    // }
    // console.log("Added all data features");

    console.log("Script completed successfully");
  } catch (error) {
    console.error(error);
  }
};

