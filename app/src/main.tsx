// FRAMEWORK
import ReactDOM from "react-dom/client";

// TRANSLATION
import "./i18n.ts";

// CALCITE COMPONENTS
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-loader";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-shell-center-row";
import "@esri/calcite-components/dist/components/calcite-scrim";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-list";
import "@esri/calcite-components/dist/components/calcite-list-item";

// APP COMPONENTS
import App from "./App.tsx";

// CONTEXT
import { AppContextProvider } from "./context/app-context";

// STYLES
import "./index.css";

// MAP COMPONENTS
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

// Set Calcite assets path
setAssetPath("https://js.arcgis.com/calcite-components/2.11.1/assets");

// Define Map Components
defineMapElements(window, {
  resourcesUrl: "https://jsdev.arcgis.com/map-components/4.30/builddate.txt",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

