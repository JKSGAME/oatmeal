import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import DummyCrm from './components/DummyCRM/DummyCrm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
        <DummyCrm/>
      </div>
    );
  }
}

export default App;
