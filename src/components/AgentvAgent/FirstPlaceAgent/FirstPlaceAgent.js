import React, { Component } from 'react';
import './FirstPlaceAgent.css';

import io from 'socket.io-client';
const socket = io();

class FirstPlaceAgent extends Component {
    constructor(){
        super()

    }

    
    render() {
    return (
      <div className="Leader">
      {/* Will access information with something like leaderboard[0].name */}
        <div className="leaderAvatar">will be image from db</div>
        <div >
            <div>Leaders Name</div>
            <div>Leaders Team</div>
            <div>Current KPI</div>
        </div>
      </div>
    );
  }
}

export default FirstPlaceAgent;