import React, { Component } from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularArticle: [
        {
          image: "https://source.unsplash.com/random",
          title:
            "The Away Luggage Saga Shows Venture Capital Needs a Reality Check",
          author: "John Doe",
          dateCreated: "Dec 7 | 16 minutes read"
        },
        {
          image: "https://placeimg.com/640/480/any",
          title: "The Away Luggage Saga Shows",
          author: "Frank",
          dateCreated: "Nov 19 | 26 minutes read"
        },
        {
          image: "https://picsum.photos/700/500",
          title: "Venture Capital Needs a Reality Check",
          author: "Lisa",
          dateCreated: "Apr 1 | 19 minutes read"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Grid container spacing={4} style={{ marginBottom: 20 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/article" style={{ textDecoration: "none" }}>
              <div>
                <div className="popular-img"></div>
                <Grid
                  container
                  spacing={2}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Grid item xs={12} md={11}>
                    <div style={{ paddingTop: 10 }}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          color: "#000",
                          lineHeight: "20px",
                          marginBottom: 15
                        }}
                      >
                        The Away Luggage Saga Shows Venture Capital Needs a
                        Reality Check
                      </Typography>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                        color="textSecondary"
                      >
                        Silicon Valley is indeed changing the world, and not
                        always for the better
                      </Typography>
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          style={{
                            fontFamily: "Gupter",
                            color: "#000",
                            marginTop: 15,
                            fontWeight: "bold"
                          }}
                        >
                          John Doe
                        </Typography>
                      </Link>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", color: "#000" }}
                      >
                        Dec 7 | 16 minutes read
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {this.state.popularArticle.map(lists => (
              <Link to="/article" style={{ textDecoration: "none" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <div
                      className="popular-img-1"
                      style={{ backgroundImage: `url(${lists.image})` }}
                    ></div>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color: "#000",
                        lineHeight: "20px",
                        marginBottom: 15
                      }}
                    >
                      {lists.title}
                    </Typography>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        style={{
                          fontFamily: "Gupter",
                          color: "#000",
                          marginTop: 15
                        }}
                      >
                        {lists.author}
                      </Typography>
                    </Link>
                    <Typography
                      variant="caption"
                      component="p"
                      style={{ fontFamily: "Poppins", color: "#000" }}
                    >
                      {lists.dateCreated}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Link to="/article" style={{ textDecoration: "none" }}>
              <div className="popular-article">
                <div className="popular-img"></div>
                <Grid
                  container
                  spacing={2}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Grid item xs={12} md={11}>
                    <div style={{ paddingTop: 10 }}>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          color: "#000",
                          lineHeight: "20px",
                          marginBottom: 15
                        }}
                      >
                        The Away Luggage Saga Shows Venture Capital Needs a
                        Reality Check
                      </Typography>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                        color="textSecondary"
                      >
                        Silicon Valley is indeed changing the world, and not
                        always for the better
                      </Typography>
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        <Typography
                          variant="subtitle1"
                          component="p"
                          style={{
                            fontFamily: "Gupter",
                            color: "#000",
                            marginTop: 15,
                            fontWeight: "bold"
                          }}
                        >
                          John Doe
                        </Typography>
                      </Link>
                      <Typography
                        variant="caption"
                        component="p"
                        style={{ fontFamily: "Poppins", color: "#000" }}
                      >
                        Dec 7 | 16 minutes read
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Feature;
