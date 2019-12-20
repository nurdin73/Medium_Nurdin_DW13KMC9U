import React, { Component } from "react";
import { Avatar, Typography, IconButton } from "@material-ui/core";
import { display } from "@material-ui/system";
import { Link, useParams } from "react-router-dom";
import { Star, Favorite, BookmarkBorderOutlined } from "@material-ui/icons";
import "../App.css";
import Axios from "axios";
import { withRouter } from "react-router";

class ArticleData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    Axios.get(
      `http://localhost:5000/api/v1/user/${match.params.username}/articles`
    ).then(res => {
      const result = res.data;
      this.setState({ result: result });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        {this.state.result.map(ap => (
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
                <Avatar style={{ marginRight: 10 }}>{ap.user[0]}</Avatar>
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
                    {ap.user}
                  </Link>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {ap.dateCreated.slice(0, -14)}
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
                  backgroundImage: `url(${ap.image})`
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
                {ap.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ fontFamily: "Bitter" }}
              >
                {ap.content.substr(0, 100)}...
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
                  30
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  component="p"
                  variant="caption"
                  color="textSecondary"
                >
                  30 response
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

export default withRouter(ArticleData);
