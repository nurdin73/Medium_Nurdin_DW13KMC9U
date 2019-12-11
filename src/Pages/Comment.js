import React, { Component } from "react";
import Header from "../Component/Header";
import "../App.css";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button
} from "@material-ui/core";
import Links from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import { Favorite, ExpandMore, BookOutlined } from "@material-ui/icons";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: "",
      data: []
    };
  }

  onChange = event => {
    this.setState({ add: event.target.value });
  };
  onSubmit = event => {
    this.setState({
      add: "",
      data: [...this.state.data, this.state.add]
    });
  };
  addData = event => {
    if (event.keyCode == 13) {
      if (document.getElementById("outlined-textarea").value !== "") {
        this.onSubmit();
        document.getElementById("outlined-textarea").value = "";
      }
    }
  };
  render() {
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <Grid item xs={11} md={6} style={{ marginBottom: 30 }}>
            <Typography
              variant="caption"
              component="p"
              style={{
                fontWeight: "bold",
                fontFamily: "Poppins"
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
                <Grid item xs={11}>
                  <from onSubmit={this.onSubmit}>
                    <TextField
                      name="comment"
                      id="outlined-textarea"
                      label="Write a response"
                      placeholder="Write a response"
                      multiline
                      variant="outlined"
                      fullWidth={true}
                      value={this.state.add}
                      onChange={this.onChange}
                      onKeyUp={this.addData}
                    />
                  </from>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
        {this.state.data.map((item, index) => (
          <div
            style={{
              marginTop: "30px",
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
                  <Avatar style={{ marginRight: 10 }}>J</Avatar>
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
                      John doe
                    </Link>
                    <Typography
                      variant="caption"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Dec 7, 2019
                    </Typography>
                  </div>
                </div>
                <Link to="/comment" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontFamily: "Frank Ruhl Libre", color: "#000" }}
                  >
                    {item}
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
                        <Favorite /> 2K
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
                        2 Response
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
