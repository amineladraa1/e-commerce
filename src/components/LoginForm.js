import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Grid,
  Button,
  Avatar,
  Typography,
  Box,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, .15)",
    backdropFilter: "blur(5px)",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validate = (values) => {
  const errors = {};
  const requiredFields = ["email", "password"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
const onSubmit = () => {};
const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">Sign In</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid xs={12} sm={12}>
            <Field
              name="email"
              type="email"
              component={renderTextField}
              label="email"
              fullWidth
            />
          </Grid>
          <Grid xs={12} sm={12}>
            <Field
              name="passWord"
              component={renderTextField}
              label="password"
              type="password"
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
          disabled={submitting}
        >
          log in
        </Button>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: "LoginForm", // a unique identifier for this form
  validate,
})(LoginForm);
