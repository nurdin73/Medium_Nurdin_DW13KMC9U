import React, { Component } from "react";
import Header from "../Component/Header";
import "../App.css";
import { Typography, Grid, Paper, Avatar } from "@material-ui/core";
import Links from "@material-ui/core/Link";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Favorite,
  ExpandMore,
  BookOutlined
} from "@material-ui/icons";
class Comment extends Component {
  render() {
    const coments = [
      {
        name: "John Doe",
        inisial: "J",
				date: "Jul 8, 2019",
				respons: 30,
				like : 320,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae laoreet ligula, ornare blandit orci. Nullam feugiat, orci gravida rutrum hendrerit, libero neque ultricies turpis, sed imperdiet ex dolor quis justo. Pellentesque accumsan vitae eros id pretium. Phasellus a diam congue, bibendum quam a, semper enim. Proin in sagittis dolor, et sagittis nulla."
      },
      {
        name: "Yulia",
        inisial: "Y",
				date: "Jul 10, 2019",
				respons: 6,
				like : 326,
        content:
          "Donec eget ultricies lectus. Proin luctus, sem ut ultrices luctus, felis tortor volutpat nisl, non fermentum sem erat tincidunt urna. In faucibus suscipit metus. Phasellus nec aliquam quam, facilisis vehicula neque. Nullam ultricies a mauris nec porta. Donec ullamcorper ipsum eu ipsum lacinia"
      }
    ];
    return (
      <div className="bg-comment">
        <Header />
        <div
          style={{
            backgroundColor: "#fff",
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "180px"
          }}
        >
          <Grid item xs={11} md={6}>
            <Typography
              variant="caption"
              component="p"
              style={{
                fontWeight: "bold",
                fontFamily: "Poppins",
                marginBottom: 10
              }}
            >
              Showing responses for:
            </Typography>
            <Link to="/article" style={{ textDecoration: "none" }}>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "5px"
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        color: "#000"
                      }}
                    >
                      Progressive Web Apps with PokeAPI and Deploy using
                      Firebase
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Author
                    </Typography>
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
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      <Favorite fontSize="small" /> 128
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Link>
          </Grid>
        </div>
        <div
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "180px"
          }}
        >
          <Grid item xs={11} md={6}>
            <Typography
              variant="caption"
              component="p"
              style={{
                fontWeight: "bold",
                fontFamily: "Poppins",
                marginBottom: 10
              }}
            >
              Responses
            </Typography>
            <div
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#fff"
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </Grid>
                <Grid
                  item
                  xs={11}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >
                  <from>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <textarea
                        name=""
                        className="add-comment"
                        cols="75"
                        placeholder="Write a response.."
                      ></textarea>
                    </div>
                  </from>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
				{coments.map((text, index) => (
          <div
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Grid item xs={11} md={6}>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#fff",
                marginBottom: 40
              }}
            >
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                style={{
                  fontFamily: "Poppins",
                  marginBottom: 20
                }}
              >
                Applause from Chris Morgan (author)
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: 20
                }}
              >
                <Avatar style={{ marginRight: 10 }}>{text.inisial}</Avatar>
                <div>
                  <Link
                    to="/profile"
                    style={{
                      fontFamily: "Roboto Condensed",
                      color: "#000",
                      textDecoration: "none",
                      fontSize: 16,
                      color: "#03a87c"
                    }}
                  >
                    {text.name}
                  </Link>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {text.date}
                  </Typography>
                </div>
              </div>
              <Link to="/comment" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  component="p"
                  style={{ fontFamily: "Frank Ruhl Libre", color: "#000" }}
                >
                  {text.content}
                </Typography>
              </Link>
              <Links href="/comment" color="inherit">
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: "Gupter", marginTop: 10 }}
                >
                  Read More..
                </Typography>
              </Links>
              <Grid container style={{ marginTop: 20 }}>
                <Grid item xs={2}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    <Links href="#" color="inherit">
                      <Favorite /> {text.like}
                    </Links>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Link
                    to="/comment"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none"
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="p"
                      color="textSecondary"
                    >
                      {text.respons} Response
                    </Typography>
                    <Typography
                      variant="caption"
                      component="p"
                      color="textSecondary"
                      style={{ margin: "0 5px" }}
                    >
                      <BookOutlined />
                    </Typography>
                    <Typography
                      variant="caption"
                      component="p"
                      color="textSecondary"
                    >
                      <ExpandMore color="inherit" />
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        ))}
      </div>
    );
  }
}
export default Comment;
