import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../App.css';
import { Facebook, Twitter, LinkedIn, Instagram } from '@material-ui/icons';
import { Fab } from '@material-ui/core'
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Container,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Avatar,
} from '@material-ui/core';
import Header from '../Component/Header';
const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing (1),
  },
}));
class Article extends Component {
  render () {
    return (
      <div style={{backgroundColor: '#ffffff'}}>
        <Header />
        <Content />
      </div>
    );
  }
}

function Content () {
  return (
    <Container>
      <Grid container style={{marginBottom: 20, marginTop: 30}}>
        <Grid item sm={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Title Image"
                className="card-img"
                image="https://placeimg.com/1378/780/any"
                title="Title Image"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <div className="container-app">
        {/* Uploader */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Avatar style={{marginRight: 10}}>J</Avatar>
            <div>
              <Link
                to="/profile"
                style={{
                  fontFamily: 'Roboto Condensed',
                  color: '#000',
                  textDecoration: 'none',
                  fontSize: 16,
                }}
              >
                John Doe
              </Link>
              <Typography
                variant="caption"
                component="p"
                style={{fontFamily: 'Poppins'}}
              >
                12 November 2019
              </Typography>
            </div>
          </div>
          <div>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              style={{margin: 10}}
            >
              Follow
            </Button>
          </div>
        </div>
        {/* Related Tag */}
        <div
          style={{
            display: 'flex',
            width: 170,
            justifyContent: 'space-between',
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            component="p"
            style={{
              fontFamily: 'Poppins',
              color: '#757575',
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            Animal
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            component="p"
            style={{
              fontFamily: 'Poppins',
              color: '#757575',
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            Education
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            component="p"
            style={{
              fontFamily: 'Poppins',
              color: '#757575',
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            Reptile
          </Typography>
        </div>
        {/* Title Article */}
        <Typography variant="h4" component="p" style={{fontFamily: 'Bitter'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Typography>
        {/* Article */}
        <div style={{textAlign: 'justify'}}>
          <Typography
            variant="subtitle1"
            component="p"
            style={{fontFamily: 'Poppins', marginTop: 20}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris nisl, elementum facilisis orci a, ultrices porta purus. Nulla non orci ut lacus malesuada suscipit sed vel turpis. Vestibulum suscipit rutrum posuere. Fusce sed hendrerit justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Vivamus non consequat risus. Nam congue tellus id magna mollis, non vulputate urna facilisis. Duis mollis dolor nec metus pretium dignissim. Morbi luctus enim ac est tempor viverra. Aenean et odio tincidunt nisi vulputate maximus. Sed a felis vel lacus pulvinar condimentum et a arcu.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            style={{fontFamily: 'Poppins', marginTop: 20}}
          >
            Integer accumsan enim ac tortor egestas ullamcorper. In fermentum facilisis sapien, ut accumsan erat cursus sit amet. Maecenas vestibulum, neque a euismod facilisis, turpis metus posuere quam, sed sagittis dolor lectus eget mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla at finibus lacus. Fusce efficitur urna et quam viverra, et auctor enim rutrum. Etiam bibendum nisi leo, eget pellentesque enim iaculis vel. Quisque dapibus feugiat lectus, in tempor nulla feugiat in. Praesent non vestibulum orci. Pellentesque ullamcorper eget nisi sed imperdiet. Mauris rhoncus nunc tempus erat blandit, sed placerat orci porta.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            style={{fontFamily: 'Poppins', marginTop: 20}}
          >
            Maecenas lobortis odio eu rhoncus pulvinar. Nunc purus eros, consequat sed ligula at, sodales blandit augue. In sed sodales libero, eget rutrum libero. Phasellus aliquam vestibulum velit consequat sodales. Mauris ac rhoncus neque, non placerat dolor. Maecenas vel iaculis massa. Morbi dapibus, erat ac consequat dignissim, mauris purus viverra mi, eget porta urna est imperdiet neque.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            style={{fontFamily: 'Poppins', marginTop: 20}}
          >
            Vivamus eu lacus ut diam porta sodales. Sed tristique ligula nec fringilla fermentum. Sed suscipit augue velit, sed commodo arcu consectetur sit amet. Nullam pulvinar in purus nec tempor. Vestibulum viverra at nisi vitae aliquet. Etiam tempus nisl a tortor tincidunt tristique. Maecenas sit amet efficitur lectus. Aliquam convallis rhoncus enim ac pellentesque. Integer blandit tincidunt augue, sit amet rutrum tellus faucibus ut.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            style={{fontFamily: 'Poppins', marginTop: 20}}
          >
            Vestibulum eleifend imperdiet leo ut condimentum. Sed posuere varius lorem. Phasellus neque leo, efficitur in dui at, bibendum posuere eros. Phasellus vitae porta libero. Sed et orci id eros ultricies ultricies et vitae ligula. Pellentesque et sapien ornare, porttitor magna non, congue ante. Proin iaculis auctor pellentesque. Quisque dignissim velit orci, at molestie metus aliquet ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam facilisis maximus magna eget pharetra. Fusce tincidunt nisl ut sapien tempus, laoreet fermentum tellus pharetra. In pellentesque blandit magna sed commodo. In elementum lacus et sem volutpat volutpat. Fusce viverra sagittis convallis. Sed sit amet faucibus massa, in mattis sem.
          </Typography>
        </div>
				{/* Follow */}
				<div style={{display:"flex", justifyContent:"space-between", width:"40%", marginTop:30, marginBottom:30}}>
					<Fab
						variant="extended"
						size="small"
						color="primary"
						aria-label="add"
					>
						<Facebook style={{marginRight:5}} />
						Facebook
					</Fab>
					<Fab
						variant="extended"
						size="small"
						color="secondary"
						aria-label="add"
					>
						<Instagram style={{marginRight:5}} />
						Instagram
					</Fab>
					<Fab
						variant="extended"
						size="small"
						color="primary"
						style={{backgroundColor:"#007bff"}}
						aria-label="add"
					>
						<Twitter style={{marginRight:5}} />
						Twitter
					</Fab>
				</div>			
      </div>
    </Container>
  );
}

export default Article;
