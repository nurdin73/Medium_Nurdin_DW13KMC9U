import React, {Component} from 'react';
import {Divider, Typography, Paper, CardMedia, Grid} from '@material-ui/core';
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
        <Divider style={{marginTop: 70, marginBottom:10}}/>
        {/* Menu */}
      </div>
    );
  }
}
function Lists() {
    return(
      <div>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="h4" component="p" color="textSecondary" style={{ fontFamily:"Poppins", fontWeight:"bold"}}>
              01
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle2" component="p" style={{ fontFamily:"Poppins", fontWeight:"bold", color:"#000", lineHeight:"20px", marginBottom:5}}>
              The Away Luggage Saga Shows Venture Capital Needs a Reality Check
            </Typography>
            <Link to="/profile" style={{textDecoration:"none"}}>
              <Typography variant="caption" component="p" style={{fontFamily:"Poppins", color:"#000", marginTop:5}}>
                John Doe
              </Typography>
            </Link>
            <Typography variant="caption" component="p" style={{fontFamily:"Poppins", color:"#000"}}>
              Dec 7 | 16 minutes read
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
}

export default Popular;
