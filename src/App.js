import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@material-ui/core";
import "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Article from "./Pages/Article";
import Category from "./Pages/Category-page";
import Comments from "./Pages/Comment";
import Profile from "./Pages/Profile";
import Bookmarks from "./Pages/Bookmark";
import Stories from "./Pages/Stories";
import NewStories from "./Pages/NewStories";
import Stats from "./Pages/Stats";
import ArticlePerson from "./Pages/articlePerson";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/articlePerson">
            <ArticlePerson />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/newstory">
            <NewStories />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/bookmark">
            <Bookmarks />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/comment">
            <Comments />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
