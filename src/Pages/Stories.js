import React, { Component } from 'react';
import Header from '../Component/Header'
import { Container, Typography, Grid, Button } from '@material-ui/core';
import {
  Link
} from "react-router-dom";
import Tabs from '../Component/Tabs'
class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{display:"flex", justifyContent:"center"}}>
					<Grid item xs={11} md={9}>
						<div style={{margin:"40px 0", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
							<div>
								<Typography variant="h3" component="h3" style={{fontFamily:"Bitter", fontWeight:"bold"}}>
									Your Stories
								</Typography>
							</div>
							<div style={{display:"flex"}}>
								<Link to="/import" style={{textDecoration:"none", marginRight:"10px"}}>
									<Button color="primary" variant="outlined" size="small">
										Import a story
									</Button>
								</Link>
								<Link to="/newstory" style={{textDecoration:"none"}}>
									<Button color="default" variant="outlined" size="small">
										Write a story
									</Button>
								</Link>
							</div>
						</div>
						<Tabs/>
					</Grid>
				</div>
      </div>
    );
  }
}

export default Stories;

