import React, { Component } from 'react';
import './UnrankedAgents.css';



class UnrankedAgents extends Component {
    constructor(){
        super()
    }
    
    render() {
    return (
      <div >
        {/* Using jsx Loop over remaining users and display their pic, name, team, current kpi  */}
        <div className="unranked">
            <div className="avatar"> IMG </div>
            <div>Name</div>
            <div>Team</div>
            <div>Current KPI</div>
        </div>
        
      </div>
    );
  }
}

export default UnrankedAgents;