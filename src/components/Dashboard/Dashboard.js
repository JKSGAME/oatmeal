import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Dashboard.css'
import ModalExampleDimmer from './Modal'
import Leaderboard from '../Leaderboard/Leaderboard';


class Dashboard extends Component {
  constructor(){
    super()

  }

  render() {
    return (
      <div className="Dashboard">
        <header>
          <h1>Welcome to the Dashboard</h1>
        </header>
        <div className='carousel'>
          <button>Prev</button>
          <Leaderboard />
          <button>Next</button>
        </div>
        <ModalExampleDimmer/>
        <Link to="/dummycrm" ><button className="crm-btn">Sample CRM</button></Link>
      </div>
    );
  }
}

export default Dashboard;