import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStandings } from './../../ducks/reducer'
import AgentvAgent from './../AgentvAgent/AgentvAgent';
import TeamvTeam from './../TeamvTeam/TeamvTeam'
import Carousel from '../Carousel/Carousel';
import './Leaderboard.css';
import _ from "lodash";

import io from 'socket.io-client'
const socket = io()

class Leaderboard extends Component {
    constructor( props ){
        super( props )
        this.state={
            challenges: {},
            standings: {}
        
        } 

        this.updateStandings = this.updateStandings.bind( this )
    }

    componentDidMount(){

        axios.get( '/api/challenges' ).then( allChallenges =>{
            this.setState({
                challenges: allChallenges.data
            })
        })
        console.log(this.props)
        let roomId = this.props.challengeId
            if ( roomId > 0 ) {
            socket.emit( 'join room', {
                room: roomId
            })
            }

        socket.on( 'response', res => {
            this.updateStandings( res )
        })
    }

    updateStandings( standings ) {
        console.log(standings)
        this.setState({
            standings: standings
        })
    }
    

    
    render() {
        let chalTypeId = _.map( this.state.challenges, "challenge_type_id" )
        console.log(this.state.challenges)
        let length = chalTypeId.length
        
        return(
            <div>
            <Carousel length={length} > 
                        
            { ( chalTypeId.reverse() ).map( ( e, i )=>{
                if ( e === 1 ){
                    return(
                        <div key = {e}>
                            <TeamvTeam />
                        </div>
                    )
                } else if ( e === 2 ){
                    return( 
                        <div key = {e}>
                            <AgentvAgent />
                        </div>
                    )
                }
            })}
            </Carousel> 
        </div>
    )
  }
}

function mapStateToProps( state ){
    return{
        standings: state.standings
    }
}

export default connect( mapStateToProps, { getStandings } )( Leaderboard );