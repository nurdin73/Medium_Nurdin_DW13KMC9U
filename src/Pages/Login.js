import React, { Component } from "react";
import {
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
const Username = localStorage.getItem("userName");
const Pass = localStorage.getItem("password");
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      message: ""
    };
  }
  onChangeUsername = event => {
    this.setState({ userName: event.target.value });
  };
  onChangePass = event => {
    this.setState({ password: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    if (Username === this.state.userName && Pass === this.state.password) {
      alert("Login Success");
      window.location.href = "/home";
    } else {
      alert("Username or Password is wrong!");
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#e0e0e0"
        }}
      >
        <Grid item xs={11} md={9}>
          <Paper style={{ padding: 40, textAlign: "center" }}>
            <Grid
              container
              spacing={1}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  component="p"
                  style={{
                    fontFamily: "Gupter",
                    fontWeight: 400,
                    fontSize: 36
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  style={{
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#9e9e9e",
                    marginBottom: 20
                  }}
                >
                  Sign in to get personalized story recommendations, follow
                  authors and topics you love, and interact with stories.
                </Typography>
                <form
                  autoComplete="off"
                  style={{ marginBottom: 30 }}
                  onSubmit={this.onSubmit}
                >
                  <FormControl fullWidth style={{ marginBottom: 10 }}>
                    <InputLabel htmlFor="my-username">
                      Enter Username..
                    </InputLabel>
                    <Input
                      type="text"
                      id="my-username"
                      aria-describedby="my-helper-text-username"
                      value={this.state.userName}
                      onChange={this.onChangeUsername}
                    />
                    <FormHelperText id="my-helper-text-username" color="error">
                      {this.state.message}
                    </FormHelperText>
                  </FormControl>
                  <FormControl fullWidth style={{ marginBottom: 10 }}>
                    <InputLabel htmlFor="my-password">
                      Enter Password..
                    </InputLabel>
                    <Input
                      type="password"
                      id="my-password"
                      aria-describedby="my-helper-text-password"
                      value={this.state.password}
                      onChange={this.onChangePass}
                    />
                    <FormHelperText id="my-helper-text-password" color="error">
                      {this.state.message}
                    </FormHelperText>
                  </FormControl>
                  <Button
                    color="inherit"
                    variant="contained"
                    type="submit"
                    style={{
                      width: 200,
                      backgroundColor: "#000",
                      color: "#fff"
                    }}
                  >
                    Login
                  </Button>
                </form>
                <Typography
                  variant="subtitle1"
                  component="h1"
                  style={{ fontWeight: "bold" }}
                >
                  Don't have account?{" "}
                  <Link
                    to="/register"
                    style={{
                      color: "rgb(2, 158, 116)",
                      textDecoration: "none"
                    }}
                  >
                    Sign Up
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  style={{
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#9e9e9e",
                    marginBottom: 20
                  }}
                >
                  To make Medium work, we log user data and share it with
                  service providers. Click “Sign Up” above to accept Medium’s
                  Terms of Service & Privacy Policy.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default Login;
