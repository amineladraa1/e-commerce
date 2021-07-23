import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React from "react";
import LoginForm from "../LoginForm";
import { useStyles } from "./ModalStyle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SignInModal({ handleCloseModel, openModel }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Dialog
        open={openModel}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModel}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <LoginForm />
      </Dialog>
    </div>
  );
}

export default SignInModal;
