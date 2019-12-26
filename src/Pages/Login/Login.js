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
import "./Login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem("token") != null) {
      alert("you have logged in");
      window.location.href = "http://localhost:3000/";
    }
    this.state = {
      userName: "",
      password: ""
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

    Axios({
      method: "post",
      url: "http://localhost:5000/api/v1/login",
      data: {
        username: this.state.userName,
        password: this.state.password
      }
    }).then(data => {
      if (data.data.message === true) {
        localStorage.setItem("token", data.data.token);
        alert("login success");
        window.location.href = "http://localhost:3000/";
      } else {
        alert("Username or Password is wrong!");
      }
    });

    // if (Username === this.state.userName && Pass === this.state.password) {
    //   localStorage.setItem("isLogin", 1);
    //   alert("Login Success");
    //   window.location.href = "/home";
    // } else {
    //   alert("Username or Password is wrong!");
    // }
  };
  render() {
    return (
      <div className="Login">
        <Grid item xs={11} md={9}>
          <Paper style={{ padding: 40, textAlign: "center" }}>
            <Grid container spacing={1} className="d-flex">
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="p" className="title-bold">
                  Welcome Back
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  className="subtitle"
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
                    className="btn-black"
                  >
                    Login
                  </Button>
                </form>
                <Typography
                  variant="subtitle1"
                  component="h1"
                  className="text-bold"
                >
                  Don't have account?{" "}
                  <Link to="/register" className="text-success">
                    Sign Up
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  className="subtitle"
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
