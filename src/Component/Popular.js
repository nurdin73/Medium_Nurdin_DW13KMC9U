import React, { Component } from "react";
import { Divider, Typography, Paper, CardMedia, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
class Popular extends Component {
  render() {
    const Popular = [
      {
        no: "01",
        title:
          "The Away Luggage Saga Shows Venture Capital Needs a Reality Check",
        author: "John Doe",
        dateCreated: "Dec 7 | 16 minutes read"
      },
      {
        no: "02",
        title: "The Away Luggage Saga Shows Venture",
        author: "Yulia",
        dateCreated: "Dec 11 | 03 minutes read"
      },
      {
        no: "03",
        title: "Venture Capital Needs a Reality Check",
        author: "Frank",
        dateCreated: "Nov 3 | 33 minutes read"
      }
    ];
    return (
      <div>
        <Typography
          variant="h5"
          component="p"
          className="p-3"
          style={{ fontFamily: "Frank Ruhl Libre" }}
        >
          Popular on medium
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
        {Popular.map(populars => (
          <Link to="/article" style={{ textDecoration: "none" }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography
                  variant="h4"
                  component="p"
                  color="textSecondary"
                  style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                >
                  {populars.no}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle2"
                  component="p"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    color: "#000",
                    lineHeight: "20px",
                    marginBottom: 5
                  }}
                >
                  {populars.title}
                </Typography>
                <Link to="/articlePerson" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{
                      fontFamily: "Poppins",
                      color: "#000",
                      marginTop: 5
                    }}
                  >
                    {populars.author}
                  </Typography>
                </Link>
                <Typography
                  variant="caption"
                  component="p"
                  style={{ fontFamily: "Poppins", color: "#000" }}
                >
                  {populars.dateCreated}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        ))}
        <Divider style={{ marginTop: 70, marginBottom: 10 }} />
        {/* Menu */}
      </div>
    );
  }
}
function Lists() {
  return <div></div>;
}

export default Popular;
