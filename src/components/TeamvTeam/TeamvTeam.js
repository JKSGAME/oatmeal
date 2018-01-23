import React, { Component } from 'react';
import './TeamvTeam.css';
import TVTFirstPlaceTeam from './TVTFirstPlaceTeam/TVTFirstPlaceTeam';
import TVTSecondPlaceTeam from './TVTSecondPlaceTeam/TVTSecondPlaceTeam';


class TeamvTeam extends Component {

    render() {
    return (
      <div className="TeamvTeam">
        <div className="TVT-title">
          <h1>Challenge Name</h1>
          <p>Challenge Description</p>
        </div>
        <div className="TVT-leaderboard-data">
          <div className="TVT-FirstPlaceTeam-Placement">
            <TVTFirstPlaceTeam/>
          </div>
          <div className="TVT-SecondPlaceTeam-Placement">
            <TVTSecondPlaceTeam/>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamvTeam;