import React from "react";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justify="center"
          spacing={2}
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                About us
              </Grid>
              <Grid item className={classes.link}>
                Dummy links
              </Grid>
              <Grid item className={classes.link}>
                for the grid
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                relevent products
              </Grid>
              <Grid item className={classes.link}>
                kami ha mi haaa
              </Grid>
              <Grid item className={classes.link}>
                let's goooooooo
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                saba kalifornia
              </Grid>
              <Grid item className={classes.link}>
                london bridge
              </Grid>
              <Grid item className={classes.link}>
                kamikasi london
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img alt="image" src={footerAdornment} className={classes.adornment} />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.iconsContainer}
      >
        <Grid
          item
          component="a"
          href="https://facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
