import {
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import background from "../../assets/background.jpg";
import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/phone.svg";
import airplane from "../../assets/send.svg";
import ButtonArrow from "../../ui/ButtonArrow";
import mobileBg from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    height: "60em",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBg})`,
      backgroundAttachment: "inherit",
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
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
      marginTop: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
      marginTop: 0,
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
  msgInput: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 5,
    marginTop: "5em",
  },
}));

function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [message, setMessage] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    let isValid;
    let regexEm = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        isValid = regexEm.test(e.target.value);
        if (!isValid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        isValid = /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g.test(e.target.value);
        if (!isValid) {
          setPhoneHelper("invalid phone Number");
        } else {
          setPhoneHelper("");
        }
      default:
        break;
    }
  };

  return (
    <Grid container>
      <Grid
        item
        container
        lg={4}
        xl={3}
        style={{
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
          marginBottom: matchesMD ? "5em" : 0,
        }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Grid
            item
            style={{
              marginBottom: "2em",
              textAlign: matchesMD ? "center" : undefined,
            }}
          >
            <Typography variant="h2" style={{ lineHeight: 1 }}>
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              style={{ color: theme.palette.primary.main }}
            >
              We're waiting
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item>
              <img
                src={phoneIcon}
                alt="phone"
                style={{ marginRight: "0.5em" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
              >
                <a
                  href="tel:5555555555"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  (+212) 6-49060835
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ marginBottom: "2em" }}>
            <Grid item>
              <img
                src={emailIcon}
                alt="envelope"
                style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
              >
                <a
                  href="mailto:amineladraa67@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  amineladraa67@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" style={{ maxWidth: "20em" }}>
            <Grid item>
              <TextField
                value={name}
                id="name"
                fullWidth
                label="Name"
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.9em", marginTop: "0.9em" }}>
              <TextField
                value={email}
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                label="Email"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                value={phone}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                fullWidth
                label="Phone"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              className={classes.msgInput}
              multiline
              rows={10}
              style={{ maxWidth: "20em" }}
              id="message"
              fullWidth
              InputProps={{ disableUnderline: true }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>

          <Grid
            item
            container
            justifyContent="center"
            style={{
              marginTop: "2em",
            }}
          >
            <Button
              className={classes.subButton}
              disabled={
                name.length === 0 ||
                emailHelper.length !== 0 ||
                phoneHelper.length !== 0 ||
                message.length === 0
              }
              style={{
                boxShadow: theme.shadows[4],
                marginRight: 0,
                marginLeft: 0,
              }}
              variant="contained"
              onClick={() => setOpen(true)}
            >
              Send Message
              <img
                alt="plane emoji"
                src={airplane}
                style={{ marginLeft: "1em" }}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ zIndex: theme.zIndex.modal + 2 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "15em"
              : "25em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                value={name}
                id="name"
                fullWidth
                label="Name"
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.9em", marginTop: "0.9em" }}>
              <TextField
                value={email}
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                label="Email"
                onChange={(e) => handleChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                value={phone}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                fullWidth
                label="Phone"
                onChange={handleChange}
              />
            </Grid>

            <Grid item>
              <TextField
                className={classes.msgInput}
                multiline
                rows={10}
                style={{ maxWidth: "20em" }}
                id="message"
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              style={{ marginTop: "2em" }}
              alignItems="center"
            >
              <Grid item>
                <Button
                  style={{ fontWeight: 300 }}
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.subButton}
                  disabled={
                    name.length === 0 ||
                    emailHelper.length !== 0 ||
                    phoneHelper.length !== 0 ||
                    message.length === 0
                  }
                  style={{
                    boxShadow: theme.shadows[4],
                    marginRight: 0,
                    marginLeft: 0,
                  }}
                  variant="contained"
                  onClick={() => setOpen(true)}
                >
                  Send Message
                  <img
                    alt="plane emoji"
                    src={airplane}
                    style={{ marginLeft: "1em" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        lg={8}
        xl={9}
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent={matchesMD ? "center" : "space-between"}
        className={classes.background}
      >
        <Grid item style={{ marginLeft: matchesMD ? 0 : "3em" }}>
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
                onClick={() => props.setValue(2)}
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
            onClick={() => props.setValue(5)}
            className={classes.subButton}
            style={{ color: "white" }}
          >
            Free Subscription
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
