import React, { Component } from 'react';
import './AgentvAgent.css';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdAgent from './SecondThirdAgent/SecondThirdAgent';
import UnrankedAgents from './UnrankedAgents/UnrankedAgents';

import io from 'socket.io-client';
const socket = io()

class AgentvAgent extends Component {
    constructor(){
        super()
        this.state={
            standings: 'Current Standings'
        }

        this.changeStandings = this.changeStandings.bind(this)

        socket.on('response', data => {
            this.setState( { standings: data.standings })
        })
    }
    changeStandings(){
        console.log('change standings a v a')
        socket.emit('update standings', { })
    }
    
    render() {
    return (
        <div className="AgentvAgent">
        <div className="inlineTemp">
            <h1>{this.state.standings}</h1>
            <button onClick={ ()=> this.changeStandings() } className="crm-btn">Change Standings</button>
        </div>
        <div className= "topAgent">
            <FirstPlaceAgent />
        </div>
        <div className="bottomAgent">
            <SecondThirdAgent />
            <UnrankedAgents />
        </div>
      </div>
    );
  }
}

export default AgentvAgent;