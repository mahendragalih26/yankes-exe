import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogState, initDialogState } from "../../helper/initState/dialog";
import { connect } from "react-redux";
import { dialogConfig } from "../../redux/dialog/dialogActions";

interface Props {
  dialog: DialogState;
  dialogConfig: (data: DialogState) => void;
}

const mapStateToProps = (state: any) => {
  return {
    dialog: state.dialog,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dialogConfig: (data: DialogState) => dispatch(dialogConfig(data)),
  };
};

const DialogComponent: React.FC<Props> = ({ dialog, dialogConfig }) => {
  const resetDialog = () => {
    dialogConfig({
      isDialogShown: false,
    });
    setTimeout(() => {
      dialogConfig(initDialogState);
    }, 200);
  };
  const closeDialog = () => {
    if (dialog.actionNo) {
      dialog.actionNo();
    }
    resetDialog();
  };
  const yesStatementDialog = () => {
    if (dialog.actionYes) {
      dialog.actionYes();
    }
    resetDialog();
  };
  return (
    <Dialog
      open={dialog.isDialogShown}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialog.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {dialog.actionNo || dialog.defaultActionNo ? (
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
        ) : (
          ""
        )}
        <Button onClick={yesStatementDialog} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogComponent);
