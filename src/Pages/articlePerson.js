import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { Grid, Typography, Avatar, Button } from "@material-ui/core";
import Links from "@material-ui/core/Link";
import { Twitter } from "@material-ui/icons";
import Tabs from "../Component/TabsProfile";
import { withRouter } from "react-router";
import Axios from "axios";
class articlePerson extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px"
          }}
        >
          <Grid item xs={11} md={6}>
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
                    Author
                  </Typography>
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" size="small" color="primary">
                      Follow
                    </Button>
                  </Link>
                </div>
                <Typography style={{ margin: "20px 0" }}>
                  CEO of Know Your Team (http://knowyourteam.com). My life’s
                  mission is to help people become happier at work.
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Medium member since March 2017·Editor of Signal v. Noise and
                  Know Your Team Blog·Top writer in Leadership, Startup,
                  Entrepreneurship
                </Typography>
                <div style={{ display: "flex", margin: "10px 0" }}>
                  <Links href="/following">
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Noto Serif", marginRight: "15px" }}
                    >
                      93 Following
                    </Typography>
                  </Links>
                  <Links href="/followers">
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Noto Serif", marginRight: "20px" }}
                    >
                      17.3K Followers
                    </Typography>
                  </Links>
                  <a
                    href="https://twitter.com"
                    style={{ color: "#ccc", textDecoration: "none" }}
                  >
                    <Twitter />
                  </a>
                </div>
              </div>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className="avatar-profile"
              >
                B
              </Avatar>
            </div>
            <Tabs />
          </Grid>
        </div>
      </div>
    );
  }
}

export default articlePerson;
