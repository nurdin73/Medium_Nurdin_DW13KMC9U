import React, { Component } from 'react';
import Header from '../Component/Header'
import { Grid, Avatar, Typography, Button } from '@material-ui/core';
import '../App.css'
import {
  Link
} from "react-router-dom";
class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
				<Grid container style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
					<Grid item xs={6} style={{margin:"40px 0"}}>
						<div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
							<div>
								<div style={{display:"flex", alignItems:"center"}}>
									<Typography variant="h4" component="p" style={{fontFamily:"Noto Serif", fontWeight:"bold", marginRight:20}}>
										Nurdin
									</Typography>
									<Link to="/profile" style={{textDecoration:"none"}}>
										<Button variant="outlined" size="small" color="default">
											Edit Profile
										</Button>
									</Link>
								</div>
								<Typography variant="subtitle2" color="textSecondary" component="p" style={{fontFamily:"Noto Serif", fontWeight:"bold"}}>
									1 Following
								</Typography>
							</div>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="avatar-profile">B</Avatar>
						</div>
						<Typography variant="subtitle1" component="p" color="textSecondary" style={{fontFamily:"Poppins", marginTop:40, fontWeight:"bold"}}>
							There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
						</Typography>
					</Grid>
				</Grid>
      </div>
    );
  }
}

export default Profile;