import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  iconsContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "3em",
    [theme.breakpoints.down("md")]: {
      right: "1.5em",
    },
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down("md")]: {
      width: "2em",
      height: "2em",
    },
  },
}));
