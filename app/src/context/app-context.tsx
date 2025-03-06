// FRAMEWORK
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useRef,
  useCallback,
} from "react";

// ARCGIS CORE
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { setLocale } from "@arcgis/core/intl.js";

// TRANSLATION
import { useTranslation } from "react-i18next";

// UTILS
import { uniqueId } from "lodash";

// TYPES
import { Alert, ConfirmDialog } from "@/constants/types";

// CONFIG
import config from "@/constants/config";

interface Props {
  children: React.ReactNode;
}

/**
 * The type/interface for AppContext
 */
export type AppContextType = {
  alerts: Alert[];
  dispatchAlert: React.Dispatch<Alert>;
  confirm: (data: ConfirmDialog) => Promise<boolean>;
  confirmDialog: ConfirmDialog | null;
  confirmRef: React.MutableRefObject<((choice: boolean) => void) | undefined>;
  mapView?: __esri.MapView;
  setMapView: React.Dispatch<__esri.MapView>;
  countiesLayer?: FeatureLayer;
  indicatorsLayer?: FeatureLayer;
  dataLayer?: FeatureLayer;
  inMemoryLayer?: FeatureLayer;
  getFeatures: (
    layer: __esri.FeatureLayer,
    query?: __esri.Query,
    results?: __esri.Graphic[]
  ) => Promise<__esri.Graphic[]>;
  indicator?: __esri.Graphic;
  setIndicator: React.Dispatch<__esri.Graphic>;
};

/**
 * The AppContext
 * https://react.dev/learn/managing-state
 */
const AppContext = createContext<AppContextType | null>(null);

/**
 * A reducer for the global alerts to add or remove alerts
 * @param {Alert[]} alerts The current list of alerts
 * @param {Alert} alert The alert to add or remove
 * @returns {Alert[]} The new list of alerts
 */
const alertsReducer = (alerts: Alert[], alert: Alert): Alert[] => {
  if (alert.id) {
    return alerts.filter((a) => a.id !== alert.id);
  } else {
    return [...alerts, { ...alert, id: uniqueId() }];
  }
};

/**
 * A provider for the AppContext
 * @returns {React.JSX.Element} The AppContextProvider
 */
export const AppContextProvider = ({ children }: Props) => {
  // Translation
  const { i18n } = useTranslation();

  // Global alerts
  const [alerts, dispatchAlert] = useReducer(alertsReducer, []);

  // Global confirm dialog
  const confirmRef = useRef<(choice: boolean) => void>();
  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialog | null>(
    null
  );

  // Map and layer state
  const [mapView, setMapView] = useState<__esri.MapView>();
  const [countiesLayer, setCountiesLayer] = useState<FeatureLayer>();
  const [indicatorsLayer, setIndicatorsLayer] = useState<FeatureLayer>();
  const [dataLayer, setDataLayer] = useState<FeatureLayer>();
  const [inMemoryLayer, setInMemoryLayer] = useState<FeatureLayer>();
  const [indicator, setIndicator] = useState<__esri.Graphic>();

  // FUNCTIONS

  /**
   * Confirm action with dialog
   */
  const confirm = useCallback(
    (data: ConfirmDialog): Promise<boolean> => {
      return new Promise((resolve) => {
        setConfirmDialog(data);
        confirmRef.current = (choice: boolean) => {
          resolve(choice);
          setConfirmDialog(null);
        };
      });
    },
    [setConfirmDialog]
  );

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

  // EFFECTS

  /**
   * When the app mounts
   * - Load all layers
   * - Create in-memory layer with county features
   */
  useEffect(() => {
    (async () => {
      const countiesLayer = new FeatureLayer({
        url: `${config.serviceUrl}/${config.countiesId}`,
      });
      const indicatorsLayer = new FeatureLayer({
        url: `${config.serviceUrl}/${config.indicatorsId}`,
      });
      const dataLayer = new FeatureLayer({
        url: `${config.serviceUrl}/${config.dataId}`,
      });

      setCountiesLayer(countiesLayer);
      setIndicatorsLayer(indicatorsLayer);
      setDataLayer(dataLayer);

      const features = await getFeatures(countiesLayer);
      const inMemoryLayer = new FeatureLayer({
        title: "In memory layer",
        visible: false,
        id: "in-memory",
        objectIdField: "FIPS",
        geometryType: "polygon",
        fields: [
          ...countiesLayer.fields.filter((f) => f.type !== "oid"),
          { name: "YEAR", type: "integer" },
          { name: "VALUE", type: "double" },
        ],
        source: features,
      });

      await inMemoryLayer.load();
      setInMemoryLayer(inMemoryLayer);
    })();
  }, []);

  /**
   * When the lang changes
   * - Update arcgis locale
   */
  useEffect(() => {
    setLocale(i18n.language);
    const html = document.querySelector("html");
    console.log({ html });
    if (html) html.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  // CONTEXT VALUE
  const value: AppContextType = {
    alerts,
    dispatchAlert,
    confirm,
    confirmDialog,
    confirmRef,
    indicator,
    setIndicator,
    mapView,
    setMapView,
    countiesLayer,
    indicatorsLayer,
    dataLayer,
    inMemoryLayer,
    getFeatures,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "AppContext must be called from within the AppContextProvider"
    );
  }
  return context;
};

