import React, { Component } from "react";
import Header from "../Component/Header";
import Category from "../Component/Category";
import Feature from "../Component/Feature";
import Article from "../Component/Article";
import Popular from "../Component/Popular";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
class Home extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem("isLogin") !== "1") {
      alert("You must login");
      window.location.href = "/";
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-app">
          <Category />
        </div>
        <Container style={{ marginTop: 20 }}>
          <Feature />
        </Container>
        <div className="container-app">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              style={{ marginTop: 15 }}
            >
              <Link
                to="/feature"
                style={{
                  textDecoration: "none",
                  color: "#03a87c",
                  fontWeight: 600,
                  fontFamily: "Poppins"
                }}
              >
                SEE ALL FEATURE >
              </Link>
            </Typography>
          </div>
          <Divider style={{ marginBottom: 30 }} />
          <Grid container spacing={8}>
            <Grid item xs={12} md={8}>
              <Article />
            </Grid>
            <Grid item xs={12} md={4}>
              <Popular />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Home;
