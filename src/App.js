import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  } from '@material-ui/core'
import {  } from '@material-ui/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Article from './Pages/Article'
import Category from './Pages/Category-page'
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/register">
            <Register />
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
