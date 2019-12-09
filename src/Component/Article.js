import React, {Component} from 'react';
import {Paper, CardMedia, Typography, IconButton} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bookmark, BookmarkBorderOutlined} from '@material-ui/icons';
class Article extends Component {
  constructor (props) {
    super (props);
    this.state = {variable: 0};
  }

  render () {
    return (
      <Paper className="article-list">
        <div style={{flex: 3}}>
          <Typography
            gutterBottom
            variant="h6"
            component="p"
            style={{fontFamily: 'Frank Ruhl Libre'}}
          >
            <Link to="/article" style={{textDecoration: 'none', color: '#000'}}>
              Title Article
            </Link>
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="p"
            style={{marginTop: 15}}
          >
            <Link to="/profile" style={{textDecoration: 'none', color: '#000'}}>
              John Doe
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Dec 6 | 4 min read
          </Typography>
        </div>
        <div style={{flex: 1, marginLeft: 10}}>
          <CardMedia
            component="img"
            height="130"
            image="https://placeimg.com/640/480/any"
            title="Title Image"
          />
        </div>
      </Paper>
    );
  }
}

export default Article;
