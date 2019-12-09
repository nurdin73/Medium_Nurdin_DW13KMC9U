import React, {Component} from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  Divider,
  Container,
} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../App.css';
class Feature extends Component {
  constructor (props) {
    super (props);
    this.state = {variable: 0};
  }

  render () {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://placeimg.com/640/480/any"
                  title="Title Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link
                      to="/article"
                      style={{textDecoration: 'none', color: '#000'}}
                    >
                      Title Article
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={{marginTop: 15}}
                  >
                    <Link
                      to="/profile"
                      style={{textDecoration: 'none', color: '#000'}}
                    >
                      John Doe
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Dec 6 | 4 min read
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="article-list">
              <div style={{flex: 1, marginRight: 10}}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://placeimg.com/640/480/any"
                  title="Title Image"
                />
              </div>
              <div style={{flex: 3}}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  style={{fontFamily: 'Frank Ruhl Libre'}}
                >
                  <Link
                    to="/article"
                    style={{textDecoration: 'none', color: '#000'}}
                  >
                    Title Article
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  Feb 19, 2019 | 7 min read
                </Typography>
              </div>
            </Paper>
            <Paper className="article-list">
              <div style={{flex: 1, marginRight: 10}}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://placeimg.com/640/480/any"
                  title="Title Image"
                />
              </div>
              <div style={{flex: 3}}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  style={{fontFamily: 'Frank Ruhl Libre'}}
                >
                  <Link
                    to="/article"
                    style={{textDecoration: 'none', color: '#000'}}
                  >
                    Title Article
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  Feb 19, 2019 | 7 min read
                </Typography>
              </div>
            </Paper>
            <Paper className="article-list">
              <div style={{flex: 1, marginRight: 10}}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://placeimg.com/640/480/any"
                  title="Title Image"
                />
              </div>
              <div style={{flex: 3}}>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="p"
                  style={{fontFamily: 'Frank Ruhl Libre'}}
                >
                  <Link
                    to="/article"
                    style={{textDecoration: 'none', color: '#000'}}
                  >
                    Title Article
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  component="p"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                  }}
                >
                  Feb 19, 2019 | 7 min read
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://placeimg.com/640/480/any"
                  title="Title Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link
                      to="/article"
                      style={{textDecoration: 'none', color: '#000'}}
                    >
                      Title Article
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="p"
                    style={{marginTop: 15}}
                  >
                    <Link
                      to="/profile"
                      style={{textDecoration: 'none', color: '#000'}}
                    >
                      John Doe
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Dec 6 | 4 min read
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <div className="container-app">
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              style={{marginTop: 15}}
            >
              <Link
                to="/feature"
                style={{
                  textDecoration: 'none',
                  color: '#03a87c',
                  fontWeight: 600,
                  fontFamily: 'Poppins',
                }}
              >
                SEE ALL FEATURE >
              </Link>
            </Typography>
          </div>
          <Divider />
        </div>
      </div>
    );
  }
}

export default Feature;
