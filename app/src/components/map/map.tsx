// FRAMEWORK
import { useEffect, useState } from "react";

// TRANSLATION
import { useTranslation } from "react-i18next";

// MAP COMPONENTS
import { ArcgisMap, ArcgisZoom } from "@arcgis/map-components-react";
import { ArcgisMapCustomEvent } from "@arcgis/map-components";

// ARCGIS CORE
import Graphic from "@arcgis/core/Graphic";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color.js";

// CALCITE COMPONENTS
import {
  CalciteLabel,
  CalciteLoader,
  CalciteOption,
  CalciteScrim,
  CalciteSelect,
  CalcitePanel,
} from "@esri/calcite-components-react";

// UTILS
import { debounce } from "lodash";

// STYLES
import "./map.css";

// CONTEXT
import { useAppContext } from "@/context/app-context";

function MapComponent() {
  // TRANSLATION
  const { t, i18n } = useTranslation();

  // APP STATE
  const {
    mapView,
    setMapView,
    inMemoryLayer,
    countiesLayer,
    indicator,
    getFeatures,
    dataLayer,
  } = useAppContext();

  // LOCAL STATE
  const [mapReady, setMapReady] = useState<boolean>(false);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [mapLoading, setMapLoading] = useState<boolean>(false);
  const [years, setYears] = useState<number[]>([]);
  const [year, setYear] = useState<number>(2000);
  const [states, setStates] = useState<__esri.Graphic[]>([]);
  const [state, setState] = useState<__esri.Graphic>();

  // FUNCTIONS

  /**
   * Handle when the view is ready
   * @param {ArcgisMapCustomEvent<void>} event The event from map component
   */
  const handleViewReady = async (event: ArcgisMapCustomEvent<void>) => {
    const mapView = event.target?.view;
    const map = event.target?.map;
    if (!mapView || !map) return;
    reactiveUtils.watch(
      () => mapView.updating,
      debounce((updating) => setMapLoading(updating), 500)
    );
    setMapView(mapView);
  };

  /**
   * Update the layer values
   */
  const updateLayer = async () => {
    if (!indicator || !dataLayer || !inMemoryLayer) return;
    setDataLoading(true);

    let where = `INDICATOR = '${indicator.attributes["INDICATOR"]}'`;
    if (state) where += ` AND STATE_FIPS = '${state.attributes["STATE_FIPS"]}'`;

    // Set the title
    inMemoryLayer.title =
      indicator.attributes[i18n.language === "es" ? "NAME_ES" : "NAME_EN"];

    // Get available years
    const years = await getFeatures(dataLayer, {
      where: where,
      outFields: ["YEAR"],
      returnDistinctValues: true,
      returnGeometry: false,
    } as __esri.Query);
    const avbYears = years.map((f) => f.attributes["YEAR"]);
    setYears(avbYears);
    if (!avbYears.includes(year)) setYear(avbYears[0]);
    console.log({ avbYears });

    // Get data for selected indicator and year
    const data = await getFeatures(dataLayer, {
      where: where + ` AND YEAR = ${year}`,
    } as __esri.Query);
    console.log({ data });

    // Update our in-memory layer
    const updateRes = await inMemoryLayer.applyEdits({
      updateFeatures: data.map((feat) => {
        let value = feat.attributes["VALUE"];
        if (value === -99) value = 0;
        return new Graphic({
          attributes: {
            FIPS: feat.attributes["FIPS"],
            YEAR: feat.attributes["YEAR"],
            VALUE: value,
          },
        });
      }),
    });
    console.log({ updateRes });

    // Create a renderer
    const colorParams = {
      layer: inMemoryLayer,
      field: "VALUE",
      view: mapView,
      theme: "high-to-low",
      outlineOptimizationEnabled: true,
    } as __esri.colorCreateContinuousRendererParams;
    const { renderer } =
      await colorRendererCreator.createContinuousRenderer(colorParams);
    inMemoryLayer.renderer = renderer;
    console.log({ renderer });

    setDataLoading(false);
  };

  /**
   * When the map view is ready
   * - Update the in-memory layer
   */
  useEffect(() => {
    if (!mapReady || !inMemoryLayer) return;
    console.log("Updating layer");
    updateLayer();
  }, [mapReady, inMemoryLayer, indicator?.attributes["OBJECTID"], year, state]);

  /**
   * When the in memory layer is ready
   * - Add it to the map view
   * - Go to the full extent
   */
  useEffect(() => {
    if (!mapView || !inMemoryLayer) return;
    mapView.map.add(inMemoryLayer);
    inMemoryLayer.visible = true;
    mapView.goTo(inMemoryLayer.fullExtent);
    setMapReady(true);
  }, [inMemoryLayer, mapView]);

  /**
   * When the countiesLayer is ready
   * - Get all the states
   */
  useEffect(() => {
    if (!countiesLayer) return;
    (async () => {
      const features = await getFeatures(countiesLayer, {
        outFields: ["STATE_NAME", "STATE_FIPS"],
        returnDistinctValues: true,
        returnGeometry: false,
      } as __esri.Query);
      console.log({ features });
      setStates(features);
    })();
  }, [countiesLayer]);

  /**
   * When the state changes
   * - Add a definition expression to the in-memory layer
   * - Zoom to the state
   */
  useEffect(() => {
    if (!inMemoryLayer) return;
    let expression = "";
    if (state) {
      expression = `STATE_FIPS = '${state.attributes["STATE_FIPS"]}'`;
    }
    inMemoryLayer.definitionExpression = expression;
    inMemoryLayer.queryExtent().then(({ extent }) => {
      console.log({ extent });
      mapView?.goTo(extent);
    });
  }, [state, inMemoryLayer]);

  // RENDER
  return (
    <section className="e-map__container">
      {/* -- Big Loader -- */}
      {!inMemoryLayer && <CalciteScrim loading />}

      {/* -- Small Loader -- */}
      {(mapLoading || dataLoading) && (
        <CalciteLoader
          scale="s"
          label={t("loading")}
          className="e-map__loader"
        />
      )}

      {/* -- Settings -- */}
      <CalcitePanel
        scale="s"
        heading={t("settings")}
        className="e-map__settings"
      >
        <div className="e-map__settings-body">
          <CalciteLabel>
            {t("state")}
            <CalciteSelect
              label={t("state")}
              value={state?.attributes["STATE_FIPS"] || ""}
              onCalciteSelectChange={(event) =>
                setState(
                  states.find(
                    (s) => s.attributes["STATE_FIPS"] === event.target.value
                  )
                )
              }
            >
              <CalciteOption value="">{t("all")}</CalciteOption>
              {states.map((s) => (
                <CalciteOption
                  key={s.attributes["STATE_FIPS"]}
                  value={s.attributes["STATE_FIPS"]}
                  selected={
                    s.attributes["STATE_FIPS"] ===
                    state?.attributes["STATE_FIPS"]
                  }
                >
                  {s.attributes["STATE_NAME"]}
                </CalciteOption>
              ))}
            </CalciteSelect>
          </CalciteLabel>
          <CalciteLabel>
            {t("year")}
            <CalciteSelect
              label={t("year")}
              value={year?.toString()}
              onCalciteSelectChange={(event) =>
                setYear(parseInt(event.target.value))
              }
            >
              {years.map((y) => (
                <CalciteOption key={y} value={y} selected={y === year}>
                  {y}
                </CalciteOption>
              ))}
            </CalciteSelect>
          </CalciteLabel>
        </div>
      </CalcitePanel>

      {/* -- Map -- */}
      <ArcgisMap
        id="map"
        className="e-map"
        hidden={!inMemoryLayer}
        basemap="dark-gray-vector"
        onArcgisViewReadyChange={(event: ArcgisMapCustomEvent<void>) => {
          handleViewReady(event);
        }}
      >
        <ArcgisZoom position="top-left" />
      </ArcgisMap>
    </section>
  );
}

export default MapComponent;

