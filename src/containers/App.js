import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import NotFound from '../components/NotFound';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Redux Express SSR Boilerplate</h1>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
