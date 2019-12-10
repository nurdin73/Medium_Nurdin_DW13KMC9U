import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
	Divider,
	Container
} from "@material-ui/core";
import "../App.css";
class listCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div>
        <Grid container style={{ marginBottom: 40 }}>
          <Grid item xs={6} md={3}>
            <Typography
              variant="h2"
              component="h4"
              style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              Category
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="information">
            <Typography
              variant="h6"
              component="h4"
              style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              <span style={{ color: "#6A0BFF" }}>
                The front lines of the future.
              </span>{" "}
              A Medium publication about tech and science.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Button variant="outlined" color="primary" size="small">
              Follow
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="information1"
            style={{ marginTop: 20 }}
          >
            <Typography
              variant="h6"
              component="h4"
              style={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              <span style={{ color: "#6A0BFF" }}>
                The front lines of the future.
              </span>{" "}
              A Medium publication about tech and science.
            </Typography>
          </Grid>
        </Grid>
        <Link to="/article" style={{ textDecoration: "none" }}>
          <Card style={{ marginBottom: 40 }}>
            <CardActionArea>
              <Grid container>
                <Grid item xs={12} md={8}>
                  <Card style={{ marginBottom: 10 }}>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="180"
                      image="https://placeimg.com/1000/480/any"
                      title="Contemplative Reptile"
                    />
                  </Card>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="180"
                      image="https://placeimg.com/1000/480/any"
                      title="Contemplative Reptile"
                    />
                  </Card>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    backgroundColor: "#6A0BFF",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      component="body1"
                      className="text-title"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Architects Are Playing With the Future of Design in Video
                      Games
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      game worlds can be blueprint for the real world,
                      liberating spaces where rules can be reinvented and the
                      invisible made visible
                    </Typography>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#DAF832" }}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          marginTop: 40
                        }}
                      >
                        John Doe
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Dec 9 | 6 min read
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="/article" style={{ textDecoration: "none" }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={12} md={4}>
                <div className="content-article">
                  <div>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title1"
                    >
                      Welcome to a Refreshed OneZero
                    </Typography>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title2"
                    >
                      We have a few new things to share
                    </Typography>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#6A0BFF" }}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          marginTop: 40
                        }}
                      >
                        John Doe
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        color: "#000",
                        fontWeight: "bold"
                      }}
                    >
                      Dec 9 | 6 min read
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className="bg-article">
                  <Typography
                    variant="h1"
                    component="h5"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: "#ffffff"
                    }}
                    className="name-category"
                  >
                    Category
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className="content-article1">
                  <div>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title1"
                    >
                      Welcome to a Refreshed OneZero
                    </Typography>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      className="title2"
                    >
                      We have a few new things to share
                    </Typography>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#6A0BFF" }}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                        className="author-article"
                      >
                        John Doe
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        color: "#000",
                        fontWeight: "bold"
                      }}
                    >
                      Dec 9 | 6 min read
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardActionArea>
        </Link>
				<Link to="/article" style={{textDecoration:"none", marginTop:30}}>
					<CardActionArea style={{marginTop:30, marginBottom:30}}>
						<Grid container>
							<Grid item xs={12} md={7}>
								<div className="bg-article1">
									
								</div>
							</Grid>
							<Grid item xs={12} md={5}>
							<div className="content-article2" style={{backgroundColor:"#6A0BFF", height:"300px"}}>
                  <div>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold", color:"#fff" }}
                      className="title1"
                    >
                      Welcome to a Refreshed OneZero
                    </Typography>
                    <Typography
                      variant="h4"
                      component="p"
                      style={{ fontFamily: "Poppins", fontWeight: "bold", color:"#fff" }}
                      className="title2"
                    >
                      We have a few new things to share
                    </Typography>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#DAF832" }}
                    >
                      <Typography
                        variant="body2"
                        component="p"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "bold",
                          marginTop: 40,
													color: "#DAF832"
                        }}
                      >
                        John Doe
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      component="p"
                      style={{
                        fontFamily: "Poppins",
                        color: "#ffffff",
                        fontWeight: "bold"
                      }}
                    >
                      Dec 9 | 6 min read
                    </Typography>
                  </div>
                </div>
							</Grid>
						</Grid>
					</CardActionArea>							
				</Link>
				<div className="container-app">
					<Divider style={{marginBottom:30, backgroundColor:"#6A0BFF", height:"2px", marginTop:40}}/>
					<Link to="/article" style={{textDecoration:"none", color:"#000"}}>
						<Grid container spacing={4}>
							<Grid item xs={8}>
								<Typography variant="h5" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
									How the PlayStation Took Over the World
								</Typography>
								<Typography variant="body1" component="p" style={{fontFamily:"Poppins", fontWeight:500, marginTop:15}}>
									Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?
								</Typography>		
								<div style={{marginTop:50}}>
									<Link to="/profile" style={{textDecoration:"none"}}>
										<Typography variant="body2" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold", color:"#6A0BFF"}}>
											John Doe
										</Typography>
									</Link>
									<Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
										Dec 10 | 7 min read
									</Typography>
								</div>	
							</Grid>
							<Grid item xs={4}>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="180"
									image="https://placeimg.com/1000/480/any"
									title="Contemplative Reptile"
								/>		
							</Grid>			
						</Grid>
					</Link>
					<Divider style={{marginBottom:40, backgroundColor:"#ccc", height:"2px", marginTop:30}}/>
					<Link to="/article" style={{textDecoration:"none", color:"#000"}}>
						<Grid container spacing={4}>
							<Grid item xs={8}>
								<Typography variant="h5" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
									How the PlayStation Took Over the World
								</Typography>
								<Typography variant="body1" component="p" style={{fontFamily:"Poppins", fontWeight:500, marginTop:15}}>
									Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?
								</Typography>		
								<div style={{marginTop:50}}>
									<Link to="/profile" style={{textDecoration:"none"}}>
										<Typography variant="body2" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold", color:"#6A0BFF"}}>
											John Doe
										</Typography>
									</Link>
									<Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
										Dec 10 | 7 min read
									</Typography>
								</div>	
							</Grid>
							<Grid item xs={4}>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="180"
									image="https://placeimg.com/1000/480/any"
									title="Contemplative Reptile"
								/>		
							</Grid>			
						</Grid>
					</Link>
					<Divider style={{marginBottom:40, backgroundColor:"#ccc", height:"2px", marginTop:30}}/>
					<Link to="/article" style={{textDecoration:"none", color:"#000"}}>
						<Grid container spacing={4}>
							<Grid item xs={8}>
								<Typography variant="h5" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
									How the PlayStation Took Over the World
								</Typography>
								<Typography variant="body1" component="p" style={{fontFamily:"Poppins", fontWeight:500, marginTop:15}}>
									Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?
								</Typography>		
								<div style={{marginTop:50}}>
									<Link to="/profile" style={{textDecoration:"none"}}>
										<Typography variant="body2" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold", color:"#6A0BFF"}}>
											John Doe
										</Typography>
									</Link>
									<Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
										Dec 10 | 7 min read
									</Typography>
								</div>	
							</Grid>
							<Grid item xs={4}>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="180"
									image="https://placeimg.com/1000/480/any"
									title="Contemplative Reptile"
								/>		
							</Grid>			
						</Grid>
					</Link>
					<Divider style={{marginBottom:40, backgroundColor:"#ccc", height:"2px", marginTop:30}}/>
					<Link to="/article" style={{textDecoration:"none", color:"#000"}}>
						<Grid container spacing={4}>
							<Grid item xs={8}>
								<Typography variant="h5" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
									How the PlayStation Took Over the World
								</Typography>
								<Typography variant="body1" component="p" style={{fontFamily:"Poppins", fontWeight:500, marginTop:15}}>
									Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?
								</Typography>		
								<div style={{marginTop:50}}>
									<Link to="/profile" style={{textDecoration:"none"}}>
										<Typography variant="body2" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold", color:"#6A0BFF"}}>
											John Doe
										</Typography>
									</Link>
									<Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"Open Sans", fontWeight:"bold"}}>
										Dec 10 | 7 min read
									</Typography>
								</div>	
							</Grid>
							<Grid item xs={4}>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="180"
									image="https://placeimg.com/1000/480/any"
									title="Contemplative Reptile"
								/>		
							</Grid>			
						</Grid>
					</Link>
				</div>
      </div>
    );
  }
}

export default listCategory;
