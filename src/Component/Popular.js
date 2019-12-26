import React, { Component } from "react";
import { Divider, Typography, Paper, CardMedia, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import Axios from "axios";
class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    Axios.get(`https://medium-server.herokuapp.com/api/v1/article/latest`).then(
      res => {
        const result = res.data;
        console.log(result);
        this.setState({ result: result });
      }
    );
  }

  render() {
    var no = 1;
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
        {/* {this.state.result.map(populars => {
          return (
            <Link to="/article" style={{ textDecoration: "none" }}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography
                    variant="h4"
                    component="p"
                    color="textSecondary"
                    style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  >
                    0{no++}
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
                    {populars.title.substr(0, 30)}...
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
                      {populars.user.username}
                    </Typography>
                  </Link>
                  <Typography
                    variant="caption"
                    component="p"
                    style={{ fontFamily: "Poppins", color: "#000" }}
                  ></Typography>
                </Grid>
              </Grid>
            </Link>
          );
        })} */}
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
