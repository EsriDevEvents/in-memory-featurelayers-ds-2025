// CALCITE COMPONENTS
import { CalciteButton, CalciteDialog } from "@esri/calcite-components-react";

// TRANSLATION
import { useTranslation } from "react-i18next";

// CONTEXT
import { useAppContext } from "@/context/app-context";

// STYLES
import "./confirm.css";

const Confirm = () => {
  // TRANSLATION
  const { t } = useTranslation();

  // APP STATE
  const { confirmDialog, confirmRef } = useAppContext();

  // FUNCTIONS

  /**
   * Handle confirm
   */
  const handleConfirm = (bool: boolean) => {
    if (!confirmRef.current) return;
    confirmRef.current(bool);
  };

  if (!confirmDialog) return null;

  const { confirmText, cancelText, title, message } = confirmDialog;

  return (
    <CalciteDialog
      open
      modal
      widthScale="s"
      heading={title}
      className="e-confirm"
      onCalciteDialogClose={() => handleConfirm(false)}
    >
      <p>{message}</p>
      <CalciteButton
        slot="footer-end"
        appearance="outline-fill"
        onClick={() => handleConfirm(false)}
      >
        {cancelText || t("common.cancel")}
      </CalciteButton>
      <CalciteButton
        slot="footer-end"
        appearance="solid"
        onClick={() => handleConfirm(true)}
      >
        {confirmText || t("common.confirm")}
      </CalciteButton>
    </CalciteDialog>
  );
};

export default Confirm;

