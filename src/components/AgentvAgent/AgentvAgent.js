import React, { Component } from 'react';
import './AgentvAgent.css';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';

class AgentvAgent extends Component {
    render() {
    return (
        <div className="AgentvAgent">
            <div className="AVA-title">
                <h1>Challenge Name</h1>
                <p>Challenge Description</p>
            </div>
            <div className="AVA-leaderboard-data">
                <div className="AVA-FirstPlaceAgent-Placement">
                    <FirstPlaceAgent/>
                </div>
                <div className="AVA-SecondThirdUnrankedAgent-Placement">
                    <SecondThirdUnrankedAgent/>
                </div>
            </div>
        </div>
     
    );
  }
}

export default AgentvAgent;