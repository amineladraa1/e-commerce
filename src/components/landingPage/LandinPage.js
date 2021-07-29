import React from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, CardContent, Grid, Typography, Card } from "@material-ui/core";
import ButtonArrow from "../../ui/ButtonArrow";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import { useMediaQuery } from "@material-ui/core";
import bgImage from "../../assets/repeatingBackground.svg";
import infoBgImage from "../../assets/infoBackground.svg";
import CallToAction from "../../ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  subButton: {
    ...theme.navButtons,
    borderRadius: 50,
    height: 45,
    width: 180,
    marginRight: 40,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  btnContainer: {
    marginTop: "2em",
  },
  lrnBtnHero: {
    ...theme.typography.lrnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  lrnBtnServ: {
    ...theme.typography.lrnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  heroTxtCntnr: {
    minWidth: "22em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  backgroundImage: {
    backgroundImage: `url(${bgImage})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  RevCard: {
    position: "absolute",
    padding: "10em",
    borderRadius: 15,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0 8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBgImage: {
    backgroundImage: `url(${infoBgImage})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

function LandinPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid item>
        {" "}
        {/*-------------- hero -------------------*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTxtCntnr}>
            <Typography variant="h2" align="center">
              Bringing New york tech <br /> to morroco
            </Typography>
            <Grid container justify="center" className={classes.btnContainer}>
              <Grid item>
                <Button variant="contained" className={classes.subButton}>
                  Free subscription
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.lrnBtnHero}>
                  <span style={{ marginRight: 10 }}> Learn More </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*-------------- services -------------------*/}

        <Grid
          container
          justify={matchesSm ? "center" : undefined}
          direction="row"
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : "5em",
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
              Custom Made Products
            </Typography>

            <Typography variant="subtitle1" style={{ marginBottom: "0.8em" }}>
              Complete digital Solution, from investigation to{" "}
              <span>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.lrnBtnServ}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img alt="software icon" src={customSoftwareIcon} />
          </Grid>
        </Grid>
        {/*-------------- mobile services -------------------*/}
        <Grid
          container
          justify={matchesSm ? "center" : "flex-end"}
          direction="row"
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
              ios/Android App Developement
            </Typography>

            <Typography variant="subtitle1" style={{ marginBottom: "0.8em" }}>
              Ectended Functionality. extend Access.Increase Engagement
            </Typography>
            <Button variant="outlined" className={classes.lrnBtnServ}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid
            item
            className={classes.icon}
            style={{ marginRight: matchesSm ? 0 : "5em" }}
          >
            <img alt="software icon" src={mobileAppIcon} />
          </Grid>
        </Grid>
        {/*-------------- website services -------------------*/}
        <Grid
          container
          justify={matchesSm ? "center" : undefined}
          direction="row"
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSm ? 0 : "5em",
              textAlign: matchesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4" style={{ marginBottom: "0.5em" }}>
              Website Developement
            </Typography>

            <Typography variant="subtitle1" style={{ marginBottom: "0.8em" }}>
              Complete digital Solution, from investigation to{" "}
              <span>celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.lrnBtnServ}>
              <span style={{ marginRight: 10 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img alt="software icon" src={websiteIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/*---------------------- card section---------------------- */}
      <Grid item>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card elevation={3} className={classes.RevCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                  <Grid />
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{ marginBottom: "0.8em" }}
                    >
                      Complete digital Solution, from investigation to{" "}
                      <span>celebration</span>
                    </Typography>
                    <Button variant="outlined" className={classes.lrnBtnServ}>
                      <span style={{ marginRight: 10 }}> Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.primary.main}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.backgroundImage} />
        </Grid>
      </Grid>
      {/* -----------------------info section-----------------------  */}
      <Grid item>
        <Grid container alignItems="center" style={{ height: "80em" }}>
          <Grid
            container
            style={{ position: "absolute" }}
            direction={matchesXs ? "column" : "row"}
          >
            <Grid
              sm
              item
              style={{
                marginLeft: matchesXs ? 0 : "5em",
                textAlign: matchesXs ? "center" : undefined,
                marginBottom: matchesXs ? "10em" : 0,
              }}
            >
              <Typography variant="h2" style={{ color: "white" }}>
                About Us
              </Typography>
              <Grid />
              <Grid item>
                <Typography
                  variant="subtitle2"
                  style={{ marginBottom: "0.8em" }}
                >
                  Let's get personal.
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.lrnBtnServ}
                  style={{
                    borderColor: "white",
                    color: "white",
                  }}
                >
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white" />
                </Button>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchesXs ? 0 : "5em",
                textAlign: matchesXs ? "center" : "right",
              }}
            >
              <Typography variant="h2" style={{ color: "white" }}>
                Contact Us
              </Typography>
              <Grid />
              <Grid item>
                <Typography
                  variant="subtitle2"
                  style={{ marginBottom: "0.8em" }}
                >
                  Say hello!{" "}
                  <span role="img" aria-label="waving hand">
                    👋🏻
                  </span>
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.lrnBtnServ}
                  style={{
                    borderColor: "white",
                    color: "white",
                  }}
                >
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBgImage} />
        </Grid>
      </Grid>
      {/* ------------------call to action------------------  */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

export default LandinPage;
