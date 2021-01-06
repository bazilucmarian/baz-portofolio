import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const DialogComponent = ({ item, open }) => {
  return (
    <Dialog open={open}>
      <DialogContent></DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
