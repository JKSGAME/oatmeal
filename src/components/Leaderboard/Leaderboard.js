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
    constructor( props ){
        super( props )
        this.state={
            challenges: {}      
        } 
    }

    componentDidMount(){

        axios.get( '/api/challenges/1' ).then( allChallenges => {
            this.setState({
                challenges: allChallenges.data
            })
        })        
    }
      
    render() {
        let chalid = _.map( this.state.challenges, "id" )
        let chalTypeId = _.map( this.state.challenges, "challenge_type_id" )
        console.log(chalid);
        let leaderboard = function( chalTypeId ) {
            console.log(chalTypeId)
            if ( chalTypeId === 1 ) {
                return <AgentvAgent challengeId={chalid} />    
            } else if ( chalTypeId === 2 ) {
                return <TeamvTeam challengeId={chalid} />
            }
        }
        return (
            <div>
               { leaderboard( chalTypeId[0] ) }
            </div>
        )
    }
}

export default Leaderboard