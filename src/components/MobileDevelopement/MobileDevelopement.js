import React from "react";
import Lottie from "react-lottie";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, useMediaQuery } from "@material-ui/core";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import integrationAnimation from "../../animations/integrationAnimation/data.json";
import swiss from "../../assets/swissKnife.svg";
import access from "../../assets/extendAccess.svg";
import engagement from "../../assets/increaseEngagement.svg";
import CallToAction from "../../ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
  },
}));

function MobileDevelopement(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          <Hidden mdDown>
            <Grid
              item
              style={{
                marginLeft: "-3.5em",
                marginRight: "1em",
                marginTop: "0.05em",
              }}
            >
              <IconButton
                disableRipple
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/customsoftware"
                onClick={() => props.setSelectedIndex(1)}
              >
                <img src={backArrow} alt="back to the service page" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" style={{ width: "50em" }}>
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h3">
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              style={{
                marginLeft: "1em",

                marginTop: "0.05em",
              }}
            >
              <IconButton
                disableRipple
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/mobileapps"
                onClick={() => props.setSelectedIndex(3)}
              >
                <img src={forwardArrow} alt="go to the the revolution page" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: "15em", marginBottom: "15em" }}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            item
            md
            container
            direction="column"
            style={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4" align={matchesMD ? "center" : undefined}>
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
              >
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
              >
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            md
            style={{
              marginTop: matchesMD ? "10em" : 0,
              marginBottom: matchesMD ? "10em" : 0,
            }}
          >
            <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
          </Grid>
          <Grid
            item
            md
            container
            direction="column"
            md
            style={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="h4"
                gutterBottom
              >
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* ------------------------------icons------------------------------ */}
        <Grid
          item
          container
          container
          direction={matchesMD ? "column" : "row"}
          style={{ marginBottom: "15em" }}
        >
          <Grid item container direction="column" alignItems="center" md>
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <img src={swiss} alt="swiss army knife" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            md
            style={{
              marginTop: matchesMD ? "10em" : 0,
              marginBottom: matchesMD ? "10em" : 0,
            }}
          >
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={access}
                alt="tear-one-off sign"
                style={{ maxWidth: matchesXS ? "20em" : "28em" }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" alignItems="center" md>
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <img src={engagement} alt="app with notification" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={props.setValue} />
    </>
  );
}

export default MobileDevelopement;
