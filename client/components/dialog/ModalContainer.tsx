import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { DialogState, initDialogState } from "../../helper/initState/dialog";
import { connect } from "react-redux";
import { dialogConfig } from "../../redux/dialog/dialogActions";

interface AdditionalProps {
  maxWidth?: string | boolean | undefined | any;
  children?: ReactNode;
}

type Props = DialogState & AdditionalProps;

const Modal: React.FC<Props> = ({
  title,
  isDialogShown,
  maxWidth,
  actionNo,
  children,
}) => {
  return (
    <Dialog
      open={isDialogShown}
      maxWidth={maxWidth ? maxWidth : "sm"}
      onClose={actionNo}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      className="custom-modal"
    >
      <DialogTitle id="scroll-dialog-title">
        {title}{" "}
        {actionNo ? (
          <Button
            className="button--text__danger"
            size="small"
            onClick={() => {
              actionNo();
            }}
          >
            <CloseIcon />
          </Button>
        ) : (
          ""
        )}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
          className="flex-between flex-column"
        >
          {children}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
