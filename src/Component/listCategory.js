import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  CardActionArea,
  CardMedia,
  Divider
} from "@material-ui/core";
import "../App.css";
import Axios from "axios";
import { withRouter } from "react-router";
class listCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      article: [
        {
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris nisl, elementum facilisis orci a, ultrices porta purus.",
          author: "John Doe",
          dateCreated: "Dec 10 | 6 min read",
          image: "https://source.unsplash.com/random"
        },
        {
          title: "Lorem Ipsum is simply dummy text of the",
          content:
            "Lorem ipsum dolor elementum facilisis orci a, ultrices porta purus.",
          author: "Lisa",
          dateCreated: "Nov 12 | 2 min read",
          image: "https://placeimg.com/640/480/any"
        },
        {
          title: "text of the printing and typesetting industry",
          content:
            "consectetur adipiscing elit. Fusce mauris nisl, elementum facilisis orci a, ultrices porta purus.",
          author: "Julia",
          dateCreated: "Feb 29 | 3 min read",
          image: "https://picsum.photos/400/200"
        }
      ]
    };
  }

  componentDidMount() {
    const { match } = this.props;
    Axios.get(
      `http://localhost:5000/api/v1/category/${match.params.name}/articles`
    ).then(res => {
      const result = res.data;
      this.setState({ articles: result });
    });
  }

  render() {
    return (
      <div>
        <Grid container style={{ marginBottom: 40 }}>
          <Grid item xs={6} md={3}>
            <Typography
              variant="h2"
              component="h4"
              style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              Category
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="information">
            <Typography
              variant="h6"
              component="h4"
              style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              <span style={{ color: "#6A0BFF" }}>
                The front lines of the future.
              </span>{" "}
              A Medium publication about tech and science.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Button variant="outlined" color="primary" size="small">
              Follow
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="information1"
            style={{ marginTop: 20 }}
          >
            <Typography
              variant="h6"
              component="h4"
              style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              <span style={{ color: "#6A0BFF" }}>
                The front lines of the future.
              </span>{" "}
              A Medium publication about tech and science.
            </Typography>
          </Grid>
        </Grid>
        <Link to="/article" style={{ textDecoration: "none" }}>
          <Grid container style={{ marginBottom: 40 }}>
            <Grid item xs={12} md={8}>
              <div className="popular-img-2" style={{ marginBottom: 10 }}></div>
              <div className="popular-img-2"></div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className="content-article3"
                style={{ backgroundColor: "#6A0BFF", height: "290px" }}
              >
                <div>
                  <Typography
                    variant="h4"
                    component="p"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: "#fff"
                    }}
                    className="title1"
                  >
                    Welcome to a Refreshed OneZero
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: "#fff"
                    }}
                    className="title2"
                  >
                    We have a few new things to share
                  </Typography>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "#DAF832" }}
                  >
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        marginTop: 40
                      }}
                    >
                      John Doe
                    </Typography>
                  </Link>
                  <Typography
                    variant="body2"
                    component="p"
                    style={{
                      fontFamily: "Poppins",
                      color: "#000",
                      fontWeight: "bold"
                    }}
                  >
                    Dec 9 | 6 min read
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Link>
        <Link to="/article" style={{ textDecoration: "none" }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={12} md={4}>
                <div className="content-article">
                  <div>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title1"
                    >
                      Welcome to a Refreshed OneZero
                    </Typography>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title2"
                    >
                      We have a few new things to share
                    </Typography>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#6A0BFF" }}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          marginTop: 40
                        }}
                      >
                        John Doe
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        color: "#000",
                        fontWeight: "bold"
                      }}
                    >
                      Dec 9 | 6 min read
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className="bg-article">
                  <Typography
                    variant="h1"
                    component="h5"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: "#ffffff"
                    }}
                    className="name-category"
                  >
                    Category
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="content-article1">
                  <div>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title1"
                    >
                      Welcome to a Refreshed OneZero
                    </Typography>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title2"
                    >
                      We have a few new things to share
                    </Typography>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#6A0BFF" }}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                        className="author-article"
                      >
                        John Doe
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        color: "#000",
                        fontWeight: "bold"
                      }}
                    >
                      Dec 9 | 6 min read
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardActionArea>
        </Link>
        <Link to="/article" style={{ textDecoration: "none", marginTop: 30 }}>
          <CardActionArea style={{ marginTop: 30, marginBottom: 30 }}>
            <Grid container>
              <Grid item xs={12} md={7}>
                <div className="bg-article1"></div>
              </Grid>
              <Grid item xs={12} md={5}>
                <div
                  className="content-article2"
                  style={{ backgroundColor: "#6A0BFF", height: "300px" }}
                >
                  <div>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                      className="title1"
                    >
                      Welcome to a Refreshed OneZero
                    </Typography>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                      className="title2"
                    >
                      We have a few new things to share
                    </Typography>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#DAF832" }}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          marginTop: 40,
                          color: "#DAF832"
                        }}
                      >
                        John Doe
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        color: "#ffffff",
                        fontWeight: "bold"
                      }}
                    >
                      Dec 9 | 6 min read
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardActionArea>
        </Link>
        <div className="container-app">
          <Divider
            style={{
              marginBottom: 30,
              backgroundColor: "#6A0BFF",
              height: "2px",
              marginTop: 40
            }}
          />
          {this.state.articles.map(cont => (
            <div>
              <Link
                to="/article"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={8}>
                    <Typography
                      variant="h5"
                      component="p"
                      style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                    >
                      {cont.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        marginTop: 15
                      }}
                    >
                      {cont.content.substr(0, 120)}...
                    </Typography>
                    <div style={{ marginTop: 50 }}>
                      <Link
                        to="/articlePerson"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="body2"
                          component="p"
                          style={{
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                            color: "#6A0BFF"
                          }}
                        >
                          {cont.user}
                        </Typography>
                      </Link>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
                      >
                        {cont.dateCreated}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      alt={cont.title}
                      height="180"
                      image={cont.image}
                      title={cont.title}
                    />
                  </Grid>
                </Grid>
              </Link>
              <Divider
                style={{
                  marginBottom: 40,
                  backgroundColor: "#ccc",
                  height: "2px",
                  marginTop: 30
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(listCategory);
