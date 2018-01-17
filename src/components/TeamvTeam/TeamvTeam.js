import React, { Component } from 'react';
import './TeamvTeam.css';
import FirstPlaceTeam from './FirstPlaceTeam/FirstPlaceTeam';
import SecondPlaceTeam from './SecondPlaceTeam/SecondPlaceTeam';


class TeamvTeam extends Component {
    constructor(){
        super()
    }

    
    render() {
    return (
      <div className="TeamvTeam">
        <div>
            <FirstPlaceTeam />
        </div>
        <div>
            <SecondPlaceTeam />
        </div>
        <button className='btn'>Create Challenge</button>
      </div>
    );
  }
}

export default TeamvTeam;