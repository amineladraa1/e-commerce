import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonArrow from "../../ui/ButtonArrow";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/styles";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  lrnBtnServ: {
    ...theme.typography.lrnButton,
    fontSize: "0.7rem",
    height: 35,
    width: "11em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "3em",
    },
  },
}));

function Services({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      alignItems={matchSM ? "center" : "inherit"}
    >
      <Grid item style={{ marginLeft: matchSM ? 0 : "5em", marginTop: "2em" }}>
        <Typography variant="h3">Services</Typography>
      </Grid>
      {/* ----------------------------first Section----------------------------  */}
      <Grid
        item
        style={{
          marginTop: matchSM ? "8em" : "10em",
          marginRight: matchSM ? 0 : "5em",
        }}
      >
        <Grid container justifyContent={matchSM ? "center" : "flex-end"}>
          <Grid
            item
            style={{
              textAlign: matchSM ? "center" : undefined,
              width: matchSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Custom Made Products
            </Typography>
            <Typography variant="subtitle1">
              Complete digital Solution, from investigation to celebration
            </Typography>
            <Button
              style={{ marginTop: "2em" }}
              component={Link}
              to="/customsoftware"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              className={classes.lrnBtnServ}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img alt="software icon" src={customSoftwareIcon} width="250em" />
          </Grid>
        </Grid>
      </Grid>
      {/* -----------------------mobile section-----------------------  */}
      <Grid
        item
        style={{
          marginTop: matchSM ? "8em" : "10em",
          marginLeft: matchSM ? 0 : "5em",
        }}
      >
        <Grid container justifyContent={matchSM ? "center" : undefined}>
          <Grid
            item
            style={{
              textAlign: matchSM ? "center" : undefined,
              width: matchSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4" gutterBottom>
              ios/Android App Developement
            </Typography>
            <Typography variant="subtitle1">
              Ectended Functionality. extend Access.Increase Engagement
            </Typography>
            <Button
              style={{ marginTop: "2em" }}
              component={Link}
              to="/customsoftware"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              className={classes.lrnBtnServ}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img alt="software icon" src={mobileAppIcon} width="250em" />
          </Grid>
        </Grid>
      </Grid>
      {/* ---------------------webSite---------------------  */}
      <Grid
        item
        style={{
          marginTop: matchSM ? "8em" : "10em",
          marginRight: matchSM ? 0 : "5em",
          marginBottom: "2em",
        }}
      >
        <Grid container justifyContent={matchSM ? "center" : "flex-end"}>
          <Grid
            item
            style={{
              textAlign: matchSM ? "center" : undefined,
              width: matchSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Website Developement
            </Typography>
            <Typography variant="subtitle1">
              Complete digital Solution, from investigation to celebration
            </Typography>
            <Button
              style={{ marginTop: "2em" }}
              component={Link}
              to="/customsoftware"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              className={classes.lrnBtnServ}
            >
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img alt="software icon" src={websiteIcon} width="250em" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
