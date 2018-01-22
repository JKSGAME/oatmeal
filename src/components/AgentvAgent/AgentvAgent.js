import React, { Component } from 'react';
import './AgentvAgent.css';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';

import io from 'socket.io-client';
const socket = io()

class AgentvAgent extends Component {

    constructor() {
        super()
<<<<<<< HEAD

        this.state = {
=======
        this.state={
            standings: 'Current Standings'
        }
>>>>>>> master


<<<<<<< HEAD
        }

        socket.on( 'response', data => {
            this.setState( { standings: data.standings } )
        })
=======
        socket.on('response', data => {
            this.setState( { standings: data.standings })
        })
    }
    changeStandings(){
        console.log('change standings a v a')
        socket.emit('update standings', { })
>>>>>>> master
    }
    
    render() {
    return (
        <div className="AgentvAgent">
<<<<<<< HEAD
            <h1>challenge name</h1>
            <div className="AVA-leaderboard-data">
                <FirstPlaceAgent/>
                <SecondThirdUnrankedAgent/>
            </div>
=======
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
>>>>>>> master
        </div>
     
    );
  }
}

export default AgentvAgent;