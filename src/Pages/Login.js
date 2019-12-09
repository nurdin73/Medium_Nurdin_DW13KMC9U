import React, { Component } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

class Login extends Component {
  render() {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Grid item xs={12} md={9}>
					<Paper>
						<Typography variant="h5" component="p">
							tes
						</Typography>
					</Paper>
				</Grid>
      </div>
    );
  }
}

export default Login;