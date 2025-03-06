/**
 * Alert type
 * @property {string} [message] The alert message
 * @property {'success'| 'info' | 'warning' | 'error'} type The alert type (effects alert color)
 * @property {boolean} [persist] prevents alert from closing automatically (optional)
 * @property {string} [id] The alert id (assigned by alert reducer)
 */
export type Alert = {
  message?: string;
  title?: string;
  type: "success" | "info" | "warning" | "error";
  persist?: boolean;
  id?: string;
};

/**
 * Confirm dialog type
 * @property {string} title The confirm title
 * @property {string} message The confirm message
 * @property {'danger' | 'brand'} type The alert type (effects alert color)
 */
export interface ConfirmDialog {
  title: string;
  message: string | React.ReactNode;
  type?: "danger" | "brand";
  confirmText?: string;
  cancelText?: string;
}

