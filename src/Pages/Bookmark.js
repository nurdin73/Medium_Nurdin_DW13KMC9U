import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Header from '../Component/Header'
import { Grid, Container, Typography, Divider, Button, Card } from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
class Book extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
					<Typography variant="h3" component="p" style={{fontFamily:"Noto Serif", fontWeight:"bold", margin:"40px 0"}}>
						Bookmarks
					</Typography>
					<Grid container>
						<Grid item xs={12} md={8}>
							<Grid container style={{border:"1px solid #ccc", height:"80px", borderRadius:"5px", display:"flex", alignItems:"center"}}>
								<Grid item xs={1} style={{display:"flex", justifyContent:"center"}}>
									<Bookmark fontSize="large" />
								</Grid>
								<Grid item xs={9}>
									<Typography variant="h4" component="h3" style={{fontFamily:"Noto Serif", fontWeight:"bold"}}>
										Offline reading is here
									</Typography>
								</Grid>
								<Grid xs={2} style={{display:"flex", justifyContent:"center"}}>
									<Button size="medium" variant="contained" style={{backgroundColor:"#000", color:"#fff"}}>
										Upgrade
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
      </div>
    );
  }
}

export default Book;