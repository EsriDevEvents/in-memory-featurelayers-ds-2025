// FRAMEWORK
import React from "react";
import { createPortal } from "react-dom";

// CALCITE COMPONENTS
import { CalciteAlert } from "@esri/calcite-components-react";

// CONTEXT
import { useAppContext } from "../../context";

// STYLES
import "./alerts.css";

const icons = {
  error: "exclamation-mark-circle",
  success: "check-circle",
  info: "information",
  warning: "exclamation-mark-triangle",
};

const Alerts = () => {
  // APP STATE
  const { alerts, dispatchAlert } = useAppContext();

  return createPortal(
    <>
      {alerts.map((alert) => {
        const autoClose =
          alert.persist || alert.type === "error" ? undefined : true;

        return (
          <CalciteAlert
            open
            key={alert.id}
            placement="bottom"
            className="e-alert"
            label={alert.message}
            autoClose={autoClose}
            autoCloseDuration="fast"
            icon={icons[alert.type]}
            kind={alert.type === "error" ? "danger" : alert.type}
            onCalciteAlertClose={() => dispatchAlert(alert)}
          >
            <div slot="message">{alert.message}</div>
          </CalciteAlert>
        );
      })}
    </>,
    document.body
  );
};

export default Alerts;

