import React, { Component } from 'react';
import './Leaderboard.css';
import AgentvAgent from './../AgentvAgent/AgentvAgent';
import TeamvTeam from './../TeamvTeam/TeamvTeam'

class Leaderboard extends Component {
    constructor(){
        super()

    }
    
    render() {
        {/* Some sort of switch or jsx if statement here to determin which view will get rendered */}
    // return (
    //   <div className="Leaderboard">
    //     <TeamvTeam />
    //     <button className='btn'>Create Challenge</button>
    //   </div>
    // );
    return (
        <div className="Leaderboard">
          <AgentvAgent />
        </div>
      );
  }
}

export default Leaderboard;