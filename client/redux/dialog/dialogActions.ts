import { DialogState } from "../../helper/initState/dialog";
import * as dialogTypes from "./dialogTypes";

export const dialogConfig = (dialog: DialogState) => ({
  type: dialogTypes.DIALOG_CONFIG,
  payload: dialog,
});
