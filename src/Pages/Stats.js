import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { Grid, Typography, Divider } from "@material-ui/core";
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px"
          }}
        >
          <Grid item xs={11} md={9}>
            <Typography
              variant="h4"
              component="p"
              style={{
                fontFamily: "Bitter",
                fontWeight: "bold",
                marginBottom: "20px"
              }}
            >
              Stats
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px"
              }}
            >
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                style={{
                  fontFamily: "Poppins",
                  textTransform: "uppercase",
                  fontWeight: "bold"
                }}
              >
                Click story below to view detailed stats
              </Typography>
              <Link to="/help" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  component="p"
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold"
                  }}
                >
                  Learn more about using stats
                </Typography>
              </Link>
            </div>
            <Divider />
            <Grid container style={{ marginTop: "20px" }}>
              <Grid item xs={4}>
                <Link></Link>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Stats;
