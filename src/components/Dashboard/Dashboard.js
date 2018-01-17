import React, { Component } from 'react';
import './Dashboard.css'
import ModalExampleDimmer from './Modal'
import Leaderboard from '../Leaderboard/Leaderboard';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <header>
        <h1>Welcome to the Dashboard</h1>
        </header>
        <div className='carousel'>
        <Leaderboard />
        </div>
        <ModalExampleDimmer/>
      </div>
    );
  }
}

export default Dashboard;