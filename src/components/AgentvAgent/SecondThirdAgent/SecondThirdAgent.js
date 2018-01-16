import React, { Component } from 'react';
import './SecondThirdAgent.css'

import io from 'socket.io-client';
const socket = io();

class SecondThirdAgent extends Component {
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
      <div className="SecondThird">
        <div>
            {/* Access this data will likely be something like leaderboard[1].name for 2nd place
            and leaderboard[2].name for third place */}
            <img>will be image from db</img>
            <div>
                <p>2nd Place Name</p>
                <p>2nd Place Title</p>
                <p>2nd Place Team Name</p>
            </div>
            <div> 2nd Current KPI</div>
        </div>

        <div>
            <img>will be image from db</img>
            <div>
                <p>3rd Place Name</p>
                <p>3rd Place Titles</p>
                <p>3rd Place Team</p>
            </div>
            <div>3rd Current KPI</div>
        </div>
        
      </div>
    );
  }
}

export default SecondThirdAgent;