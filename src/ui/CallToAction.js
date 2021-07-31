import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, useTheme, Button } from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import background from "../assets/background.jpg";
import mobileBg from "../assets/mobileBackground.jpg";
import { useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  calToActBackground: {
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBg})`,
      backgroundAttachment: "inherit",
    },
  },
  lrnBtnServ: {
    ...theme.typography.lrnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subButton: {
    ...theme.navButtons,
    borderRadius: 50,
    height: 45,
    width: 180,
    marginRight: "5em",
    marginLeft: "2em",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

function CallToAction({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      style={{ height: "60em" }}
      alignItems="center"
      justifyContent={matchSM ? "center" : "space-between"}
      direction={matchSM ? "column" : "row"}
      className={classes.calToActBackground}
    >
      <Grid item style={{ marginLeft: matchSM ? 0 : "5em" }}>
        <Grid container direction="column" style={{ textAlign: "center" }}>
          <Typography variant="h2">
            Simple Planning <br /> Amazing Outcome
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
            Take advantage of what you own{" "}
          </Typography>
          <Grid container justify="center">
            <Button
              component={Link}
              to="/revolution"
              variant="outlined"
              onClick={() => setValue(2)}
              className={classes.lrnBtnServ}
            >
              <span style={{ marginRight: 5 }}> Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          onClick={() => setValue(5)}
          className={classes.subButton}
          style={{ color: "white" }}
        >
          Free Subscription
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
