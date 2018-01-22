import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
// import Dashboard from './components/Dashboard/Dashboard'
// import DummyCrm from './components/DummyCRM/DummyCrm'
// import TeamVTeam from './components/TeamvTeam/TeamvTeam'
import AgentvAgent from './components/AgentvAgent/AgentvAgent'
=======
import {HashRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard'
import DummyCrm from './components/DummyCRM/DummyCrm'
import Leaderboard from './components/Leaderboard/Leaderboard'
>>>>>>> master


class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <AgentvAgent/>
=======
      <HashRouter>
        <Switch>

          <Route path='/dummycrm' component={ DummyCrm }/>
          <Route path='/leaderboard/:id' component={ Leaderboard }/>
          <Route exact path='/' component={ Dashboard }/>

        </Switch>
      </HashRouter>
>>>>>>> master
      </div>
    );
  }
}

export default App;
