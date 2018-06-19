import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import App from './App.js';
import createBrowserHistory from 'history/createBrowserHistory';
import Login from './Login.js';
import Register from './Register.js'

const newHistory = createBrowserHistory();

const createRoutes = () => (
    <Router history={newHistory}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/home" component={App}/>
        <Route exact path="/edit" component={App}/>
      </Switch>
    </Router>
);

export default createRoutes;