import React, {Component} from 'react';
import {Divider, Typography, Paper, CardMedia} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../App.css';
class Popular extends Component {
  constructor (props) {
    super (props);
    this.state = {variable: 0};
  }

  render () {
    return (
      <div>
        <Typography
          variant="h5"
          component="p"
          className="p-3"
          style={{fontFamily: 'Frank Ruhl Libre'}}
        >
          Popular on medium
        </Typography>
        <Divider style={{marginBottom: 20}} />
        <Lists/>
        <Lists/>
        <Lists/>
      </div>
    );
  }
}
function Lists() {
    return(
        <Paper className="article-list">
          <div>
            <Typography color="textSecondary" variant="h4" component="p">
                01
            </Typography>
          </div>
          <div style={{marginLeft:10}}>
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
            <Typography variant="caption" color="textSecondary" component="p">
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
    )
}

export default Popular;
