import React, { Component } from 'react';
import './TeamvTeam.css';
import TVTFirstPlaceTeam from './TVTFirstPlaceTeam/TVTFirstPlaceTeam';
import TVTSecondPlaceTeam from './TVTSecondPlaceTeam/TVTSecondPlaceTeam';


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