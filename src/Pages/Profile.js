import React, { Component } from "react";
import Header from "../Component/Header";
import { Grid, Avatar, Typography, Button } from "@material-ui/core";
import "../App.css";
import { Link } from "react-router-dom";
import Axios from "axios";
const token = localStorage.getItem("token");
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url: "http://localhost:5000/api/v1/profile",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(profile => {
      this.setState({
        profile: profile.data
      });
      console.log(profile.data);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Grid item xs={11} md={6} style={{ margin: "40px 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h4"
                    component="p"
                    style={{
                      fontFamily: "Noto Serif",
                      fontWeight: "bold",
                      marginRight: 20
                    }}
                  >
                    {this.state.profile.fullname}
                  </Typography>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" size="small" color="default">
                      Edit Profile
                    </Button>
                  </Link>
                </div>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: "Noto Serif", fontWeight: "bold" }}
                >
                  1 Following
                </Typography>
              </div>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className="avatar-profile"
              >
                {this.state.profile.initial}
              </Avatar>
            </div>
            <Typography
              variant="subtitle1"
              component="p"
              color="textSecondary"
              style={{
                fontFamily: "Poppins",
                marginTop: 40,
                fontWeight: "bold"
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
