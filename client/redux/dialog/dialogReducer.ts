import * as dialogTypes from "./dialogTypes";
import { DialogState, initDialogState } from "../../helper/initState/dialog";

const dialogReducer = (
  state: DialogState = initDialogState,
  action: { type: string; payload?: DialogState }
): DialogState => {
  switch (action.type) {
    case dialogTypes.DIALOG_CONFIG:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default dialogReducer;
