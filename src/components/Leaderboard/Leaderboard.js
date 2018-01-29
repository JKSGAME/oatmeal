import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStandings } from './../../ducks/reducer'
import AgentvAgent from './../AgentvAgent/AgentvAgent';
import TeamvTeam from './../TeamvTeam/TeamvTeam'
import Carousel from '../Carousel/Carousel';
import './Leaderboard.css';
import _ from "lodash";

class Leaderboard extends Component {
    constructor(props){
        super()
        this.state={
            challenges: {},
        
        }
        
    }


    componentDidMount(){
        axios.get('/api/challenges').then( allChallenges =>{
            this.setState({
                challenges: allChallenges.data
            })
        })
    }
    
    render() {
        let chalid = _.map(this.state.challenges, "challenge_type_id")
        let length = chalid.length
        
        return(
            <div>
            <Carousel length={length} > 
                        
            {(chalid.reverse()).map((e, i)=>{
                if( e === 1){
                    return(
                        <div key = {e}>
                            <AgentvAgent />    
                        </div>
                    )
                }else if ( e === 2){
                    return( 
                        <div key = {e}>
                            <TeamvTeam />
                        </div>
                    )
                }
            })}
            </Carousel> 
        </div>
    )
  }
}

function mapStateToProps(state){
    return{
        standings: state.standings
    }
}

export default connect (mapStateToProps, {getStandings})(Leaderboard);