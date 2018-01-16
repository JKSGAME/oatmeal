import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <header>
        <h1>Welcome to the Dashboard</h1>
        </header>
        <div className='carousel'>
        <p>Leaderboards to be displayed here.</p>
        </div>
        <button className='btn'>Create Challenge</button>
      </div>
    );
  }
}

export default Dashboard;