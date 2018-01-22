import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard'
// import DummyCrm from './components/DummyCRM/DummyCrm'
// import TeamVTeam from './components/TeamvTeam/TeamvTeam'
import AgentvAgent from './components/AgentvAgent/AgentvAgent'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AgentvAgent/>
      </div>
    );
  }
}

export default App;
