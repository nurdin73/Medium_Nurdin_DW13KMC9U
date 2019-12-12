import React, { Component } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import { display } from "@material-ui/system";
import { Link } from "react-router-dom";
import { Star, Favorite, BookmarkBorderOutlined } from "@material-ui/icons";
import "../App.css";

class ArticleData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlePerson: [
        {
          author: "John Doe",
          dateCreated: "Sep 12 · 6 min read",
          initial: "J",
          data: {
            image: "https://source.unsplash.com/random",
            title: "When to give feedback to an employee?",
            content:
              "A perfect time to give feedback doesn’t exist — but some times....",
            like: 176,
            respons: 20
          }
        },
        {
          author: "John Doe",
          dateCreated: "Sep 22 · 2 min read",
          initial: "J",
          data: {
            image: "https://placeimg.com/640/480/any",
            title:
              "The one-on-one meeting template for your end of the year review",
            content: "What should you do for your…",
            like: 300,
            respons: 32
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.articlePerson.map(ap => (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "5px",
              marginTop: "15px"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Avatar style={{ marginRight: 10 }}>{ap.initial}</Avatar>
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
                    {ap.author}
                  </Link>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {ap.dateCreated}
                  </Typography>
                </div>
              </div>
              <Typography color="textSecondary">
                <Star />
              </Typography>
            </div>
            <Link to="/article" style={{ textDecoration: "none" }}>
              <div
                className="bg-article"
                style={{
                  height: "250px",
                  backgroundImage: `url(${ap.data.image})`
                }}
              ></div>
              <Typography
                variant="h5"
                component="p"
                style={{
                  fontFamily: "Bitter",
                  fontWeight: "bold",
                  color: "#000",
                  marginTop: "10px"
                }}
              >
                {ap.data.title}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                component="p"
                style={{ fontFamily: "Bitter" }}
              >
                {ap.data.content}
              </Typography>
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton>
                  <Favorite />
                </IconButton>
                <Typography
                  component="p"
                  variant="caption"
                  color="textSecondary"
                >
                  {ap.data.like}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  component="p"
                  variant="caption"
                  color="textSecondary"
                >
                  {ap.data.respons} response
                </Typography>
                <IconButton>
                  <BookmarkBorderOutlined />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleData;
