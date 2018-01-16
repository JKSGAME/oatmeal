import React, { Component } from 'react';
import './LastPlaceAgent.css';

import io from 'socket.io-client';
const socket = io();

class LastPlaceAgent extends Component {
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
      <div className="LastPlace">
        {/* Using jsx Loop over remaining users and display their pic, name, team, current kpi  */}
        <div>
            <img>Avatar img</img>
            <div>
                <p>Last Place Name</p>
                <p>Last Place Leaders Titles</p>
                <p>Last Place Team</p>
            </div>
            <div>Current KPI</div>
        </div>
        
      </div>
    );
  }
}

export default LastPlaceAgent;