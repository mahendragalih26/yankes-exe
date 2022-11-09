export interface DialogState {
  isDialogShown: boolean;
  title?: string;
  description?: string;
  actionYes?: () => void;
  actionNo?: () => void | undefined;
  defaultActionNo?: boolean;
}

export let initDialogState: DialogState = {
  isDialogShown: false,
  title: "",
  description: "",
  actionYes: () => {},
  actionNo: () => {},
  defaultActionNo: false,
};
