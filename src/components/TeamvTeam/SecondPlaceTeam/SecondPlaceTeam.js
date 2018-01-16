import React, { Component } from 'react';
import './FirstPlaceTeam.css';

import io from 'socket.io-client';
const socket = io();

class SecondPlaceTeam extends Component {
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
        <div>Total KPI</div>
        <div className="loserList">
            <div>
                <p> Team leaders name</p>
                <p>Team leader currnet KPI</p>
            </div>
   
            <div>
                <p>2nd Place Name</p>
                <p>2nd place current KPI</p>
            </div>

            <div>
                <p>3rd Place Name</p>
                <p>3rd place current KPI</p>
            </div>
        </div>
      </div>
    );
  }
}

export default SecondPlaceTeam;