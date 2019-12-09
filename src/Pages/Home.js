import React, { Component } from 'react';
import Header from '../Component/Header'
// import Category from '../Component/Category'
import Feature from '../Component/Feature'
import Article from '../Component/Article'
import Popular from '../Component/Popular'
import { Container, Grid } from '@material-ui/core';
class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
				<Container style={{marginTop:20}}>
					<Feature/>
				</Container>
				<Container style={{marginTop:40}}>
					<div className="container-app">
						<Grid container spacing={8}>
							<Grid item xs={12} md={8}>
								<Article/>
								<Article/>
								<Article/>
							</Grid>
							<Grid item xs={12} md={4}>
								<Popular/>
							</Grid>
						</Grid>
					</div>
				</Container>
      </div>
    );
  }
}

export default Home;