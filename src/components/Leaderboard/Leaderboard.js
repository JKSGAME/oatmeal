import React, { Component } from 'react';
import './Leaderboard.css';
import AgentvAgent from './../AgentvAgent/AgentvAgent';
import TeamvTeam from './../TeamvTeam/TeamvTeam'

class Leaderboard extends Component {
    constructor(){
        super()

        this.state ={
            score = {}
        }

        this.changeScore = this.changeScore.bind(this)

    }
    
    render() {
        {/* Some sort of switch or jsx if statement here to determin which view will get rendered */}
    return (
      <div className="Dashboard">
        <TeamvTeam />
        <button className='btn'>Create Challenge</button>
      </div>
    );
    return (
        <div className="Dashboard">
          <AgentvAgent />
          <button className='btn'>Create Challenge</button>
        </div>
      );
  }
}

export default Leaderboard;