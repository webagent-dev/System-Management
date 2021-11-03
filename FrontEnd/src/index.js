import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Nav from './comps/Nav'
import Header from './comps/Header'
import Department from './comps/Department'
import Employee from './comps/Employee'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




ReactDOM.render(
  <Router>
    <Nav />
    <Header />
    <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/department' component={Department} />
        <Route path='/employee' component={Employee} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

