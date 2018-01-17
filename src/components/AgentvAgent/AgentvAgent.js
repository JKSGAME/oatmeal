import React, { Component } from 'react';
import './AgentvAgent.css';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdAgent from './SecondThirdAgent/SecondThirdAgent';
import UnrankedAgents from './UnrankedAgents/UnrankedAgents';

class AgentvAgent extends Component {
    constructor(){
        super()
    }

    
    render() {
    return (
      <div className="AgentvAgent">
        <div className= "topAgent">
            <FirstPlaceAgent />
        </div>
        <div className="bottomAgent">
            <SecondThirdAgent />
            <UnrankedAgents />
        </div>
        <button className='btn'>Create Challenge</button>
      </div>
    );
  }
}

export default AgentvAgent;