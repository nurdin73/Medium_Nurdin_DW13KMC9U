import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import { Facebook, Twitter, LinkedIn, Instagram } from "@material-ui/icons";
import { Fab, Divider } from "@material-ui/core";
import RelatedArticle from "../Component/relatedArticle";
import {
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Avatar
} from "@material-ui/core";
import Header from "../Component/Header";
import Axios from "axios";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  }
}));

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Article: [],
      initial: "",
      Author: [
        {
          image: "https://source.unsplash.com/random",
          name: "John Doe",
          jobs: "John Doe",
          follow: "Follow"
        },
        {
          image: "https://picsum.photos/1000/1000",
          name: "Example.com",
          jobs: "",
          follow: "Following"
        }
      ]
    };
  }

  componentDidMount() {
    const { match } = this.props;
    Axios.get(
      `http://localhost:5000/api/v1/article/${match.params.title}`
    ).then(res => {
      this.setState({ Article: res.data, initial: res.data.fullName[0] });
    });
  }

  follow = event => {
    event.preventDefault();
    alert(event.target.value);
  };

  render() {
    // const Author = [
    //   {
    //     image: "https://source.unsplash.com/random",
    //     name: "John Doe",
    //     jobs: "John Doe"
    //   },
    //   {
    //     image: "https://picsum.photos/1000/1000",
    //     name: "Example.com",
    //     jobs: ""
    //   }
    // ];
    return (
      <div style={{ backgroundColor: "#ffffff" }}>
        <Header />
        <Container>
          <Grid container style={{ marginBottom: 20, marginTop: 30 }}>
            <Grid item sm={12}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Title Image"
                    className="card-img"
                    image={this.state.Article.image}
                    title="Title Image"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <div className="container-app">
            {/* Uploader */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Avatar style={{ marginRight: 10 }}>
                  {this.state.initial}
                </Avatar>
                <div>
                  <Link
                    to="/articlePerson"
                    style={{
                      fontFamily: "Roboto Condensed",
                      color: "#000",
                      textDecoration: "none",
                      fontSize: 16
                    }}
                  >
                    {this.state.Article.fullName}
                  </Link>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {this.state.Article.dateCreated}
                  </Typography>
                </div>
              </div>
              <div>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  style={{ margin: 10 }}
                >
                  Follow
                </Button>
              </div>
            </div>
            {/* Related Tag */}
            <div
              style={{
                display: "flex",
                width: 170,
                justifyContent: "space-between"
              }}
            >
              <Typography
                gutterBottom
                variant="caption"
                component="p"
                style={{
                  fontFamily: "Poppins",
                  color: "#757575",
                  fontWeight: 400,
                  textTransform: "uppercase"
                }}
              >
                {this.state.Article.category_name}
              </Typography>
            </div>
            {/* Title Article */}
            <Typography
              variant="h4"
              component="p"
              style={{ fontFamily: "Bitter" }}
            >
              {this.state.Article.title}
            </Typography>
            {/* Article */}
            <div style={{ textAlign: "justify" }}>
              <Typography
                variant="subtitle1"
                component="p"
                style={{ fontFamily: "Poppins", marginTop: 20 }}
              >
                {this.state.Article.content}
              </Typography>
            </div>
            {/* Follow */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: 30,
                marginBottom: 30
              }}
            >
              <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                <Facebook style={{ marginRight: 5 }} />
                Facebook
              </Fab>
              <Fab
                variant="extended"
                size="small"
                color="secondary"
                aria-label="add"
              >
                <Instagram style={{ marginRight: 5 }} />
                Instagram
              </Fab>
              <Fab
                variant="extended"
                size="small"
                color="primary"
                style={{ backgroundColor: "#007bff" }}
                aria-label="add"
              >
                <Twitter style={{ marginRight: 5 }} />
                Twitter
              </Fab>
            </div>
            <div style={{ display: "flex" }}>
              {["animals", "education", "jungle", "reptile"].map(
                (text, index) => (
                  <Link to="/category" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      color="default"
                      size="small"
                      style={{ marginRight: 10 }}
                    >
                      {text}
                    </Button>
                  </Link>
                )
              )}
            </div>
            <Divider style={{ margin: "40px 0" }} />
            {this.state.Author.map(author => (
              <Grid container spacing={2} style={{ margin: "20px 0" }}>
                <Grid item xs={10}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={2}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={author.image}
                        style={{ width: "90px", height: "90px" }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        color="textSecondary"
                        variant="body1"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          textTransform: "uppercase"
                        }}
                      >
                        {author.jobs}
                      </Typography>
                      <Typography
                        color="textPrimary"
                        variant="h5"
                        component="p"
                        style={{ fontFamily: "Bitter", fontWeight: "bold" }}
                      >
                        {author.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center"
                  }}
                >
                  <form onSubmit={this.follow}>
                    <input
                      type="hidden"
                      value={author.follow}
                      onChange={this.changeData}
                    />
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      type="submit"
                    >
                      {author.follow}
                    </Button>
                  </form>
                </Grid>
              </Grid>
            ))}

            <Divider style={{ margin: "40px 0" }} />
            <Grid container>
              <Grid item xs={12}>
                <div style={{ display: "block" }}>
                  <Link to="/comment" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ width: "100%", padding: "15px 0" }}
                    >
                      See responses
                    </Button>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <RelatedArticle />
      </div>
    );
  }
}

export default withRouter(Article);
