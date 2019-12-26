import React, { Component } from "react";
import {
  Paper,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Button
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Bookmark, BookmarkBorderOutlined } from "@material-ui/icons";
import "../App.css";
import Axios from "axios";
import slugify from "slugify";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url: "http://localhost:5000/api/v1/articles"
    }).then(data => {
      this.setState({ result: data.data });
    });
  }

  render() {
    const url = "/articles";
    const url1 = "/article/";
    return (
      <div>
        {this.state.result.map(articles => (
          <Grid container spacing={4} style={{ marginBottom: "20px" }}>
            <Grid item xs={9}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
                style={{ textTransform: "uppercase" }}
              >
                {articles.category.name}
              </Typography>
              <Link
                to={url1 + slugify(articles.title, { lower: true })}
                style={{ textDecoration: "none" }}
              >
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
                  {articles.title}
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  color="textSecondary"
                >
                  {articles.content.substr(0, 200)}...
                </Typography>
              </Link>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Link
                    to={articles.user.username + url}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="subtitle1"
                      component="p"
                      style={{
                        fontFamily: "Gupter",
                        color: "#000",
                        marginTop: 10,
                        fontWeight: "bold"
                      }}
                    >
                      {articles.user.username}
                    </Typography>
                  </Link>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{ fontFamily: "Poppins", color: "#000" }}
                  >
                    {articles.dateCreated}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  {/* Icon */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <div
                className="popular-img-2"
                style={{ backgroundImage: `url(${articles.image})` }}
              ></div>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Article;
