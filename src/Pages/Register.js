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
class Register extends Component {
  userData;
  constructor(props) {
    super(props);

    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangePass = this.onChangePass.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName: "",
      userName: "",
      password: ""
    };
  }
  onChangeName = event => {
    this.setState({ fullName: event.target.value });
  };
  onChangeUsername = event => {
    this.setState({ userName: event.target.value });
  };
  onChangePass = event => {
    this.setState({ password: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    localStorage.setItem("fullName", this.state.fullName);
    localStorage.setItem("userName", this.state.userName);
    localStorage.setItem("password", this.state.password);
    this.setState({
      fullName: "",
      userName: "",
      password: ""
    });
  };
  // componentDidMount() {
  //   this.userData = JSON.parse(localStorage.getItem("user"));
  //   if (localStorage.getItem("user")) {
  //     this.setState({
  //       fullName: this.userData.fullName,
  //       userName: this.userData.userName,
  //       password: this.userData.password
  //     });
  //   } else {
  //     this.setState = {
  //       fullName: "",
  //       userName: "",
  //       password: ""
  //     };
  //   }
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("user", JSON.stringify(nextState));
  // }
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
        <Grid item xs={12} md={9}>
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
                  Join Medium
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
                  Create an account to receive great stories in your inbox,
                  personalize your homepage, and follow authors and topics that
                  you love.
                </Typography>
                <form
                  autoComplete="off"
                  style={{ marginBottom: 30 }}
                  onSubmit={this.onSubmit}
                >
                  <FormControl fullWidth style={{ marginBottom: 10 }}>
                    <InputLabel htmlFor="my-fullname">
                      Enter Fullname..
                    </InputLabel>
                    <Input
                      name="fullname"
                      type="text"
                      id="my-fullname"
                      value={this.state.fullName}
                      onChange={this.onChangeName}
                      aria-describedby="my-helper-text-fullname"
                    />
                    <FormHelperText id="my-helper-text-fullname"></FormHelperText>
                  </FormControl>
                  <FormControl fullWidth style={{ marginBottom: 10 }}>
                    <InputLabel htmlFor="my-username">
                      Enter Username..
                    </InputLabel>
                    <Input
                      name="username"
                      type="text"
                      id="my-username"
                      aria-describedby="my-helper-text-username"
                      value={this.state.userName}
                      onChange={this.onChangeUsername}
                    />
                    <FormHelperText id="my-helper-text-username"></FormHelperText>
                  </FormControl>
                  <FormControl fullWidth style={{ marginBottom: 10 }}>
                    <InputLabel htmlFor="my-password">
                      Enter Password..
                    </InputLabel>
                    <Input
                      name="password"
                      type="password"
                      id="my-password"
                      aria-describedby="my-helper-text-password"
                      value={this.state.password}
                      onChange={this.onChangePass}
                    />
                    <FormHelperText id="my-helper-text-password"></FormHelperText>
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
                    Register
                  </Button>
                </form>
                <Typography
                  variant="subtitle1"
                  component="h1"
                  style={{ fontWeight: "bold" }}
                >
                  Already have account?{" "}
                  <Link
                    to="/login"
                    style={{
                      color: "rgb(2, 158, 116)",
                      textDecoration: "none"
                    }}
                  >
                    Sign In
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

export default Register;
