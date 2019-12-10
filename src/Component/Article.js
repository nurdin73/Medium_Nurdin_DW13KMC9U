import React, {Component} from 'react';
import {Paper, CardMedia, Typography, IconButton, Grid, Button} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bookmark, BookmarkBorderOutlined} from '@material-ui/icons';
import '../App.css'
class Article extends Component {
  constructor (props) {
    super (props);
    this.state = {variable: 0};
  }

  render () {
    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              BASED ON YOUR READING HISTORY
            </Typography>
            <Link to="/article" style={{textDecoration:"none"}}>
              <Typography variant="subtitle1" component="p" style={{ fontFamily:"Poppins", fontWeight:"bold", color:"#000", lineHeight:"20px", marginBottom:15}}>
                The Away Luggage Saga Shows Venture Capital Needs a Reality Check
              </Typography>
              <Typography variant="caption" component="p" style={{fontFamily:"Poppins", fontWeight:"bold"}} color="textSecondary">
                With Google’s founders withdrawing from management duties, here’s how the partnership that would organize the world’s information began
              </Typography>
            </Link>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Link to="/profile" style={{textDecoration:"none"}}>
                  <Typography variant="subtitle1" component="p" style={{fontFamily:"Gupter", color:"#000", marginTop:10, fontWeight:"bold"}}>
                    John Doe
                  </Typography>
                </Link>
                <Typography variant="caption" component="p" style={{fontFamily:"Poppins", color:"#000"}}>
                  Dec 7 | 16 minutes read
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {/* Icon */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <div className="popular-img-2"></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Article;
