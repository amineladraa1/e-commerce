import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function NavBarPopover({ title, handlePopoverClose, open, anchorEl }) {
  const classes = useStyles();
  return (
    <Popover
      id="mouse-over-popover"
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography>{title}</Typography>
    </Popover>
  );
}

export default NavBarPopover;
