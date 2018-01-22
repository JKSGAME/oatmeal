import React, { Component } from 'react';
import './TeamvTeam.css';
import TVTFirstPlaceTeam from './FirstPlaceTeam/TVTFirstPlaceTeam';
import TVTSecondPlaceTeam from './SecondPlaceTeam/TVTSecondPlaceTeam';


class TeamvTeam extends Component {

    render() {
    return (
      <div className="TeamvTeam">

            <TVTFirstPlaceTeam />
            <TVTSecondPlaceTeam />

      </div>
    );
  }
}

export default TeamvTeam;