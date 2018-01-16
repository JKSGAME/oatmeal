import React, { Component } from 'react';
import './FirstPlaceAgent.css';

import io from 'socket.io-client';
const socket = io();

class FirstPlaceAgent extends Component {
    constructor(){
        super()

        this.state ={
            leaderboard = {}
        }

        socket.on('response', data => {
            this.setState( {leaderboard: data})
        })
    }

    
    render() {
    return (
      <div className="FirstPlace">
      {/* Will access information with something like leaderboard[0].name */}
        <div>will be image from db</div>
        <div>Current KPI</div>
        <div>
            <p>Leaders Name</p>
            <p>Leaders Titles</p>
            <p>Leaders Team</p>
        </div>
      </div>
    );
  }
}

export default FirstPlaceAgent;