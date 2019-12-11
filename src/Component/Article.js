import React, {Component} from 'react';
import {Paper, CardMedia, Typography, IconButton, Grid, Button} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bookmark, BookmarkBorderOutlined} from '@material-ui/icons';
import '../App.css'
class Article extends Component {
  render () {
    const listPopular = [
      {
        image : 'https://source.unsplash.com/random',
        title : 'The Away Luggage Saga Shows Venture Capital Needs a Reality Check',
        content : 'With Google’s founders withdrawing from management duties, here’s how the partnership that would organize the world’s information began',
        author : 'John Doe',
        dateCreated : 'Dec 7 | 16 minutes read'
      },
      {
        image : 'https://placeimg.com/640/480/any',
        title : 'The Away Luggage Saga Shows',
        content : 'With Google’s founders withdrawing from management duties',
        author : 'Frank',
        dateCreated : 'Nov 19 | 26 minutes read'
      },
      {
        image : 'https://picsum.photos/700/500',
        title : 'Venture Capital Needs a Reality Check',
        content : 'From management duties, here’s how the partnership that would organize the world’s information began',
        author : 'Lisa',
        dateCreated : 'Apr 1 | 19 minutes read'
      },
    ]
    return (
      <div>
        {listPopular.map((popular) => (
          <Grid container spacing={4}>
            <Grid item xs={9}>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                BASED ON YOUR READING HISTORY
              </Typography>
              <Link to="/article" style={{textDecoration:"none"}}>
                <Typography variant="subtitle1" component="p" style={{ fontFamily:"Poppins", fontWeight:"bold", color:"#000", lineHeight:"20px", marginBottom:15}}>
                  {popular.title}
                </Typography>
                <Typography variant="caption" component="p" style={{fontFamily:"Poppins", fontWeight:"bold"}} color="textSecondary">
                  {popular.content}
                </Typography>
              </Link>
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Link to="/profile" style={{textDecoration:"none"}}>
                    <Typography variant="subtitle1" component="p" style={{fontFamily:"Gupter", color:"#000", marginTop:10, fontWeight:"bold"}}>
                      {popular.author}
                    </Typography>
                  </Link>
                  <Typography variant="caption" component="p" style={{fontFamily:"Poppins", color:"#000"}}>
                    {popular.dateCreated}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  {/* Icon */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <div className="popular-img-2" style={{backgroundImage:`url(${popular.image})`}}></div>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Article;
