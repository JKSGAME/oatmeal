import React, { Component } from 'react';
import './TeamvTeam.css';
import TVTFirstPlaceTeam from './FirstPlaceTeam/TVTFirstPlaceTeam';
import TVTSecondPlaceTeam from './SecondPlaceTeam/TVTSecondPlaceTeam';


class TeamvTeam extends Component {

    render() {
    return (
      <div className="TeamvTeam">
<<<<<<< HEAD

            <TVTFirstPlaceTeam />
            <TVTSecondPlaceTeam />

=======
        <div className="winning-team">
    {/*<FirstPlaceTeam /> */}
        </div>
        <div className="losing-team">
            {/*<SecondPlaceTeam />*/}
        </div>
      </div>
>>>>>>> master
      </div>
    );
  }
}

export default TeamvTeam;