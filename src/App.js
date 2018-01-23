import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard'
import DummyCrm from './components/DummyCRM/DummyCrm'
import Leaderboard from './components/Leaderboard/Leaderboard'


class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
        <Switch>

          <Route path='/dummycrm' component={ DummyCrm }/>
          <Route path='/leaderboard/:id' component={ Leaderboard }/>
          <Route exact path='/' component={ Dashboard }/>

        </Switch>
      </HashRouter>
      </div>
    );
  }
}

export default App;
