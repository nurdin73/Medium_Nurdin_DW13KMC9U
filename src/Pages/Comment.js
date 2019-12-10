import React, { Component } from 'react';
import Header from '../Component/Header'
import '../App.css'
import { Typography, Grid, Paper, Avatar } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Favorite } from '@material-ui/icons';
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div className="bg-comment">
        <Header/>
        <div style={{backgroundColor:"#fff", marginTop:10, display:"flex", justifyContent:"center", alignItems:"center", height:"180px"}}>
          <Grid item xs={12} md={6}>
						<Typography variant="caption" component="p" style={{fontWeight:"bold", fontFamily:"Poppins", marginBottom:10}}>
							Showing responses for:
						</Typography>  
						<Link to="/article" style={{textDecoration:"none"}}>
							<div style={{padding:"20px", border:"1px solid rgb(102, 99, 99)", borderRadius:"5px"}}>
								<Grid container spacing={2}>
									<Grid item xs={10}>
										<Typography variant="subtitle2" component="p" style={{fontFamily:"Poppins", fontWeight:"bold", color:"#000"}}>
											Progressive Web Apps with PokeAPI and Deploy using Firebase
										</Typography>  
										<Typography variant="caption" color="textSecondary" component="p" style={{fontFamily:"Poppins"}}>
											Author
										</Typography>
									</Grid>
									<Grid item xs={2} style={{display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
										<Typography variant="caption" color="textSecondary" component="p" style={{fontFamily:"Poppins"}}>
											<Favorite fontSize="small"/> 128
										</Typography>
									</Grid>
								</Grid>
							</div>
						</Link>
					</Grid>
        </div>
				<div style={{ marginBottom:20, display:"flex", justifyContent:"center", alignItems:"center", height:"180px"}}>
          <Grid item xs={12} md={6}>
						<Typography variant="caption" component="p" style={{fontWeight:"bold", fontFamily:"Poppins", marginBottom:10}}>
							Responses
						</Typography>  
						<div style={{padding:"20px", border:"1px solid rgb(102, 99, 99)", borderRadius:"5px"}}>
							<Grid container>
								<Grid item xs={1} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
									<Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
								</Grid>
								<Grid item xs={1} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
									asdasdS
								</Grid>
							</Grid>
						</div>
					</Grid>
        </div>
      </div>
    );
  }
}

export default Comment;