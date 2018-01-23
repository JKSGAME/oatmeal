import React, { Component } from 'react';
import './AgentvAgent.css';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';

import io from 'socket.io-client';
const socket = io()

class AgentvAgent extends Component {

    render() {
    return (
        <div className="AgentvAgent">
            <h1>challenge name</h1>
            <div className="AVA-leaderboard-data">
                <FirstPlaceAgent/>
                <SecondThirdUnrankedAgent/>
            </div>
        </div>
     
    );
  }
}

export default AgentvAgent;