import React, { Component } from 'react';
import './AgentvAgent.css';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdAgent from './SecondThirdAgent/SecondThirdAgent';
import LastPlaceAgent from './LastPlaceAgent/LastPlaceAgent';

class AgentvAgent extends Component {
    constructor(){
        super()

        this.state ={
            score = {}
        }

        this.changeScore = this.changeScore.bind(this)

    }

    
    render() {
    return (
      <div className="Dashboard">
        <header>
        <h1>This is the Leaderboard</h1>
        </header>
        <div className= "firstPlace">
            <FirstPlaceAgent />
        </div>
        <div>
            <div className="secondThird">
                <SecondThirdAgent />
            </div>
            <div classname = "lastPlace">
                <UnrankedAgents />
            </div>
        </div>
        <button className='btn'>Create Challenge</button>
      </div>
    );
  }
}

export default AgentvAgent;