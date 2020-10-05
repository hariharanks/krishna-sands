
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './home'

ReactDOM.render((
    <Router history = {browserHistory}>
       <Route path = "/" component = {Home}>
          <IndexRoute component = {Home} />
          <Route path = "home" component = {Home} />
          <Route path = "about" component = {About} />
          <Route path = "contact" component = {Contact} />
       </Route>
    </Router>
 ), document.getElementById('app'))