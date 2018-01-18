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
            <h1>{this.state.standings}</h1>
        <div className= "topAgent">
            <FirstPlaceAgent />
            <button onClick={ ()=> this.changeStandings() }>Change Standings</button>
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