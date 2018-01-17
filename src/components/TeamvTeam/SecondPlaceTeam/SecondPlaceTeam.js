import React, { Component } from 'react';
import './SecondPlaceTeam.css';

import io from 'socket.io-client';
const socket = io();

class SecondPlaceTeam extends Component {
    constructor(){
        super()

    }

    
    render() {
    return (
      <div className="SecondPlaceTeam">
      {/* Will access information with something like leaderboard[0].name */}
        <div className="totalKPI">Total KPI</div>
        <div className="rightColumn">
            <div> Team Two Name</div>
            <div className="loserList">
                <div className="listElements">
                    <p> Team leaders name</p>
                    <p>Team leader currnet KPI</p>
                </div>
    
                <div className="listElements">
                    <p>2nd Place Name</p>
                    <p>2nd place current KPI</p>
                </div>

                <div className="listElements">
                    <p>3rd Place Name</p>
                    <p>3rd place current KPI</p>
                </div>
            </div>
            <div><button>Expand</button></div>
        </div>    
      </div>
    );
  }
}

export default SecondPlaceTeam;