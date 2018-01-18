import React, { Component } from 'react';
import './SecondThirdAgent.css'


class SecondThirdAgent extends Component {
    constructor(){
        super()

    }

    
    render() {
    return (
      <div className="SecondThird">
        <div>
            {/* Access this data will likely be something like leaderboard[1].name for 2nd place
            and leaderboard[2].name for third place */}
            <div className="secondThirdAvatar">will be image from db</div>
            <div>
                <div>2nd Place Name</div>
                <div>2nd Place Team Name</div>
                <div>2nd Current KPI</div>
            </div>
        </div>

        <div>
            <div className="secondThirdAvatar">will be image from db</div>
            <div>
                <div>3rd Place Name</div>
                <div>3rd Place Team</div>
                <div>3rd Current KPI</div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default SecondThirdAgent;