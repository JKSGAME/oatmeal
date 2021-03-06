import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard'
import DummyCrm from './components/DummyCRM/DummyCrm'
import Leaderboard from './components/Leaderboard/Leaderboard'
import Rewards from './components/Rewards/rewards'
import CreateBadgeModal from './components/Badges/CreateBadgeModal';

// import AgentvAgent from './components/AgentvAgent/AgentvAgent'
// import TeamvTeam from './components/TeamvTeam/TeamvTeam'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>

          <Route path='/createBadge' component={ CreateBadgeModal }/>
          <Route path='/rewards' component={ Rewards }/>
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
