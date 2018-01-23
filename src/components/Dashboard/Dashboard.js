import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Dashboard.css'
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal'
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal'
import Leaderboard from '../Leaderboard/Leaderboard';

import io from 'socket.io-client';
const socket = io()

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      standings: "Initial Standings"
    }

    socket.on('response', data=>{
      this.setState( {standings: data.standings})
    })
  }

  render() {
    return (
      <div className="Dashboard">
        <header>
          <h1>Welcome to the Dashboard</h1>
          <h2>{this.state.standings}</h2>
        </header>
        <div className='carousel'>
          <button>Prev</button>
          <Leaderboard />
          <button>Next</button>
        </div>
        <div className='modals'>
        <CreateChallengeModal/>
        <CurrentChallengeModal history={this.props.history}/>
        </div>
        <Link to="/dummycrm" ><button className="crm-btn">Sample CRM</button></Link>
      </div>
    );
  }
}

export default Dashboard;