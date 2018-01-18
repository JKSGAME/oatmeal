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
            <FirstPlaceTeam />
            <SecondPlaceTeam />
      </div>
    );
  }
}

export default TeamvTeam;