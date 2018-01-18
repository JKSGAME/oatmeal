import React, { Component } from 'react';
import './FirstPlaceTeam.css';


class FirstPlaceTeam extends Component {
    constructor(){
        super()

    }

    
    render() {
    return (
      <div className="FirstPlaceTeam">
      {/* Will access information with something like leaderboard[0].name */}
        <div className="totalKPI">Total KPI</div>
        <div className="rightColumn">
            <div>Team Name One</div>
            <div className="teamLeaders">
                <div className="leaderOne">
                    <p>1st Place</p>
                    <div>Image</div>
                    <p> Team leaders name</p>
                    <p>Team leader currnet KPI</p>
                </div>
                <div className="secondThird">
                    <div>
                        <p> 2nd Place</p>
                        <div>Image</div>
                        <p>2nd Place Name</p>
                        <p>2nd place current KPI</p>
                    </div>
                    <div>
                    <p> 3rd Place</p>
                        <div>Image</div>
                        <p>3rd Place Name</p>
                        <p>3rd place current KPI</p>
                    </div>
                </div>
            </div>
            <div ><button>Expand</button></div>
        </div>
       
      </div>
    );
  }
}

export default FirstPlaceTeam;