import React, { Component } from "react";
import { Paper, Typography, Grid, FormControl, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Register extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
					backgroundColor:"#e0e0e0"
        }}
      >
        <Grid item xs={12} md={9}>
          <Paper style={{ padding: 40, textAlign: "center" }}>
            <Grid container spacing={1} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="p" style={{fontFamily:"Gupter", fontWeight:400, fontSize:36}}>
                  Join Medium
                </Typography>
                <Typography variant="caption" component="p" style={{fontWeight:300, fontSize:14, color:"#9e9e9e", marginBottom:20}}>
                  Create an account to receive great stories in your inbox,
                  personalize your homepage, and follow authors and topics that
                  you love.
                </Typography>
								<form autoComplete="off" style={{marginBottom:30}}>
									<FormControl fullWidth style={{marginBottom:10}}>
										<InputLabel htmlFor="my-fullname">Enter Fullname..</InputLabel>
										<Input name="fullname" type="text" id="my-fullname" aria-describedby="my-helper-text-fullname" />
										<FormHelperText id="my-helper-text-fullname">Message error</FormHelperText>
									</FormControl>
									<FormControl fullWidth style={{marginBottom:10}}>
										<InputLabel htmlFor="my-username">Enter Username..</InputLabel>
										<Input name="username" type="text" id="my-username" aria-describedby="my-helper-text-username" />
										<FormHelperText id="my-helper-text-username">Message error</FormHelperText>
									</FormControl>
									<FormControl fullWidth style={{marginBottom:10}}>
										<InputLabel htmlFor="my-password">Enter Password..</InputLabel>
										<Input name="password" type="password" id="my-password" aria-describedby="my-helper-text-password" />
										<FormHelperText id="my-helper-text-password">Message error</FormHelperText>
									</FormControl>
									<Button color="inherit" variant="contained" style={{width:200, backgroundColor:"#000", color:"#fff"}}>
										Register
									</Button>
								</form>
								<Typography variant="subtitle1" component="h1" style={{fontWeight:"bold"}}>
									Already have account? <Link to="/login" style={{color:"rgb(2, 158, 116)", textDecoration:"none"}}>Sign In</Link>
								</Typography>
								<Typography variant="caption" component="p" style={{fontWeight:300, fontSize:14, color:"#9e9e9e", marginBottom:20}}>
									To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.
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
