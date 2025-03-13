// FRAMEWORK
import { useState, useEffect } from "react";

// TRANSLATION
import { useTranslation } from "react-i18next";

// CALCITE COMPONENTS
import {
  CalciteList,
  CalciteListItem,
  CalciteLoader,
} from "@esri/calcite-components-react";

// CONTEXT
import { useAppContext } from "@/context/app-context";

// ARCGIS CORE
import Graphic from "@arcgis/core/Graphic";

function Indicators() {
  // TRANSLATION
  const { t, i18n } = useTranslation();

  // APP STATE
  const { indicatorsLayer, indicator, setIndicator, getFeatures } =
    useAppContext();

  // LOCAL STATE
  const [indicators, setIndicators] = useState<Graphic[]>([]);

  // FUNCTIONS

  // EFFECTS

  /**
   * When the indicators layer is set
   * - Fetch all indicators
   */
  useEffect(() => {
    if (!indicatorsLayer) return;
    (async () => {
      const features = await getFeatures(indicatorsLayer);
      setIndicators(features);
    })();
  }, [indicatorsLayer]);

  // RENDER

  return (
    <>
      {/* -- Loading state -- */}
      {!indicators.length && <CalciteLoader label={t("loading")} />}

      {/* -- Indicators list -- */}
      {!!indicators.length && (
        <CalciteList
          filter-enabled
          selection-mode="single"
          filter-placeholder={t("search")}
        >
          {indicators.map((i) => {
            const id = i.attributes["OBJECTID"];
            const name =
              i.attributes[i18n.language === "es" ? "NAME_ES" : "NAME_EN"];
            const checked = indicator?.attributes["OBJECTID"] === id;
            return (
              <CalciteListItem
                key={id}
                value={id}
                input-enabled
                label={name}
                input-alignment="start"
                selected={checked ? true : undefined}
                onCalciteListItemSelect={() => setIndicator(i)}
              />
            );
          })}
        </CalciteList>
      )}
    </>
  );
}
export default Indicators;

