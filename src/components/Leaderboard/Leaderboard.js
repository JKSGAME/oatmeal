import React, { Component } from 'react';
import './Leaderboard.css';
import { connect } from 'react-redux';
import AgentvAgent from './../AgentvAgent/AgentvAgent';
import { getStandings } from './../../ducks/reducer'
// import TeamvTeam from './../TeamvTeam/TeamvTeam'

class Leaderboard extends Component {
    // constructor(){
    //     super()

    // }
    
    render() {
        console.log (this.props.standings, "standings object on leaderboard")
    {/* Some sort of switch or jsx if statement here to determin which view will get rendered */}
    // return (
    //   <div className="Leaderboard">
    //     <TeamvTeam />
    //   </div>
    // );
    return (
        <div className="Leaderboard">
          <AgentvAgent/>
        </div>
      );
  }
}

function mapStateToProps(state){
    return{
        standings: state.standings
    }
}

export default connect (mapStateToProps, {getStandings})(Leaderboard);