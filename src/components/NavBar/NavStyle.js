import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  appBar: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
    zIndex: theme.zIndex.modal + 1,
  },
  appBarIcons: {
    color: "white",
    marginLeft: "25px",
  },
  iconButtontab: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  image: {
    // flexGrow: 1,
    cursor: "pointer",
    height: "8rem",
    [theme.breakpoints.down("md")]: {
      cursor: "pointer",
      height: "7rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
    },
  },
  loginButton: {
    ...theme.navButtons,
    height: "3rem",
    borderRadius: "5%",
    backgroundColor: theme.palette.secondary.main,
    marginTop: "0.7rem",
  },
  loginListItem: {
    ...theme.navButtons,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      opacity: "0.9",
    },
  },
  listItemActive: {
    color: theme.palette.primary.main,
  },
  productsButton: {
    ...theme.navButtons,
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerMenuIcon: {
    height: "45px",
    width: "45px",
  },
  drawer: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
  },
}));
