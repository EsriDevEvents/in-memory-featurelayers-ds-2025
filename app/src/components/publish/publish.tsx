// FRAMEWORK
import { createPortal } from "react-dom";

// CALCITE COMPONENTS
import { CalciteButton, CalciteDialog } from "@esri/calcite-components-react";

// SCRIPTS
import { publishLayers } from "./publish-layers";

const Publish = () => {
  // FUNCTIONS

  // RETURN

  return createPortal(
    <CalciteDialog
      open
      modal
      widthScale="s"
      className="e-publish"
      heading="Run script"
    >
      <p>Would you like to Run the layer publishing script</p>
      <CalciteButton slot="footer-end" onClick={() => publishLayers()}>
        Run script
      </CalciteButton>
    </CalciteDialog>,
    document.body
  );
};

export default Publish;

