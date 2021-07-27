import React from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import ButtonArrow from "../../ui/ButtonArrow";

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
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Raleway",
    fontSize: "0.9rem",
    fontWeight: "bold",
    height: 45,
    width: 145,
  },
  heroTxtCntnr: {
    minWidth: "22em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

function LandinPage() {
  const classes = useStyles();
  const theme = useTheme();
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
    </Grid>
  );
}

export default LandinPage;
