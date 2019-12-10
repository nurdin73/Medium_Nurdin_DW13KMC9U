import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Inbox} from '@material-ui/icons'
import {Avatar, Container, Button, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Divider} from '@material-ui/core';
import '../App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    fontFamily: "Frank Ruhl Libre",
    fontWeight:"bold",
    fontSize:"30px",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    fontFamily: "Poppins",
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <div className="container-app">
					<Toolbar>
						<Typography className={classes.title} variant="h6" noWrap>
							<Link to="/" style={{textDecoration:"none", color:"#000"}}>Medium</Link>
						</Typography>
						<div className={classes.search}>
							<form method="post" autoComplete="off">
								<Button className={classes.searchIcon}>
									<SearchIcon />
								</Button>
								<InputBase
                  required
									name="search"
									placeholder="Search…"
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ 'aria-label': 'search' }}
								/>
							</form>
						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton aria-label="show 17 new notifications" color="inherit">
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							
							<SwipeableTemporaryDrawer/>
						</div>
					</Toolbar>
        </div> 
      </AppBar>
    </div>
  );
}
function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div style={{display: 'flex', justifyContent: 'flex-start', padding:"20px"}}>
        <Avatar style={{marginRight: 10, backgroundColor:"rgb(46, 125, 50)"}}>B</Avatar>
        <div>
          <Link
            to="/profile"
            style={{
              fontFamily: 'Poppins',
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
            style={{fontFamily: 'Poppins', fontWeight:"bold"}}
            color="textSecondary"
          >
            @johndoe
          </Typography>
        </div>
      </div>
      <Link to="/member" style={{textDecoration:"none", color:"rgb(46, 125, 50)"}}>
        <Typography variant="caption" component="p" style={{fontFamily:"Poppins", fontSize:"14px", fontWeight:"bold", marginBottom:15, marginLeft:20}}>
          Become a member
        </Typography>
      </Link>
      <Divider />
      <List>
        {['New Story', 'Stories', 'Stats', 'Drafts', 'Bookmarks', 'Profile', 'Settings', 'Help', 'Sign out'].map((text, index) => (
          <Link to="/profile" style={{textDecoration:"none", color:"#424242"}}>
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <IconButton
        edge="end"
        onClick={toggleDrawer('right', true)}
        color="primary"
      >
        <Avatar alt="Remy Sharp" src="/broken-image.jpg" style={{backgroundColor:"#2e7d32"}}>
          B
        </Avatar>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}