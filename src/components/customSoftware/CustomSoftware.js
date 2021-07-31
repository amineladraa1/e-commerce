import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, IconButton, Typography, useMediaQuery } from "@material-ui/core";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopWatch from "../../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
  },
}));

function CustomSoftware(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container>
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
            to="/services"
            onClick={() => props.setSelectedIndex(0)}
          >
            <img src={backArrow} alt="back to the service page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" style={{ width: "50em" }}>
          <Grid item>
            <Typography variant="h3">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
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
            onClick={() => props.setSelectedIndex(2)}
          >
            <img src={forwardArrow} alt="go to the the revolution page" />
          </IconButton>
        </Grid>
      </Grid>
      {/* -----------------------------icons----------------------------- */}
      <Grid
        item
        container
        justifyContent="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="light bulb icon" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopWatch} alt="light bulb icon" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="light bulb icon" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CustomSoftware;

// Digital Documents & Data
// Reduce Errors. Reduce Waste. Reduce Costs.

// Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.

// By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.

// Scale
// Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.

// Root-Cause Analysis
// Many problems are merely symptoms of larger, underlying issues.

// We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.

// Automation
// Why waste time when you don’t have to?

// We can help you identify processes with time or event based actions which can now easily be automated.

//  Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.

// User Experience Design
// A good design that isn’t usable isn’t a good design.

// So why are so many pieces of software complicated, confusing, and frustrating?

// By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.
