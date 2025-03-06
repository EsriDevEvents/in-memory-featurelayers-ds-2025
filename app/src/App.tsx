// FRAMEWORK
import { useState } from "react";

// TRANSLATION
import { useTranslation } from "react-i18next";

// CALCITE COMPONENTS
import {
  CalciteAction,
  CalciteActionBar,
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
  CalciteDropdown,
  CalciteButton,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteIcon,
} from "@esri/calcite-components-react";

// MAP COMPONENTS
import { ArcgisLegend } from "@arcgis/map-components-react";

// COMPONENTS
import Map from "@/components/map";
import Indicators from "@/components/indicators";
import Publish from "./components/publish";

const App = () => {
  // TRANSLATION
  const { t, i18n } = useTranslation();

  // LOCAL STATE
  const [panel, setPanel] = useState<string>("indicators");

  // RENDER

  // return <Publish />;

  return (
    <CalciteShell>
      {/* -- Header -- */}
      <div className="e-header" slot="header">
        <span>
          <CalciteIcon icon="layers" scale="m" />
          {t("title")}
        </span>
        <CalciteDropdown placement="bottom-end">
          <CalciteButton slot="trigger" kind="neutral" icon-end="chevron-down">
            {t(i18n.language)}
          </CalciteButton>
          <CalciteDropdownGroup>
            {["en", "es"].map((lang) => (
              <CalciteDropdownItem
                key={lang}
                selected={i18n.language === lang ? true : undefined}
                onClick={() => i18n.changeLanguage(lang)}
              >
                {t(lang)}
              </CalciteDropdownItem>
            ))}
          </CalciteDropdownGroup>
        </CalciteDropdown>
      </div>

      <CalciteShellPanel position="start" slot="panel-start" widthScale="m">
        <CalciteActionBar slot="action-bar" expanded>
          <CalciteAction
            text={t("indicators")}
            icon="list-rectangle"
            active={panel === "indicators" ? true : undefined}
            onClick={() => setPanel("indicators")}
          />
          <CalciteAction
            text={t("legend")}
            icon="legend"
            active={panel === "legend" ? true : undefined}
            onClick={() => setPanel("legend")}
          />
        </CalciteActionBar>

        <CalcitePanel heading={t(panel)}>
          {panel === "indicators" && <Indicators />}
          {panel === "legend" && <ArcgisLegend referenceElement="#map" />}
        </CalcitePanel>
      </CalciteShellPanel>
      <Map />
    </CalciteShell>
  );
};

export default App;

