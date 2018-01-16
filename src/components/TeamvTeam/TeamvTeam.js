import React, { Component } from 'react';
import './TeamvTeam.css';
import FirstPlaceTeam from './FirstPlaceTeam/FirstPlaceTeam';
import SecondPlaceTeam from './SecondPlaceTeam/SecondPlaceTeam';
import LastPlaceTeam from './LastPlaceTeam/LastPlaceTeam';

class TeamvTeam extends Component {
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
        <div>
            <FirstPlaceTeam />
            <SecondPlaceTeam />
        </div>
        <button className='btn'>Create Challenge</button>
      </div>
    );
  }
}

export default TeamvTeam;