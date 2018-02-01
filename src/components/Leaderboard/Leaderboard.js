import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getStandings } from './../../ducks/reducer'
import AgentvAgent from './../AgentvAgent/AgentvAgent';
import TeamvTeam from './../TeamvTeam/TeamvTeam'
import './Leaderboard.css';
import _ from "lodash";
import Fullscreen from 'react-full-screen';


class Leaderboard extends Component {
    constructor( props ){
        super( props )
        this.state={
            challenges: {},
            isFull: false,  
        } 
    }

    // goFull = () => {
    //   this.setState({ isFull: true })
    // }

    componentDidMount() {

        axios.get( `/api/challenges/${this.props.match.params.id}` ).then( allChallenges => {
            this.setState({
                challenges: allChallenges.data
            })
        })
    }

    
    render() {
        let chalid = _.map( this.state.challenges, "id" )
        let chalTypeId = _.map( this.state.challenges, "challenge_type_id" )
        let leaderboard = function( chalTypeId ) {
            if ( chalTypeId === 1 ) {
                return <AgentvAgent challengeId={chalid[0]} />    
            } else if ( chalTypeId === 2 ) {
                return <TeamvTeam challengeId={chalid[0]} />
            }
        }
        return (
            // {/* <button onClick= {this.goFull}>Fullscreen</button> */}
            // {/* <div className='board'> */}
            //     {/* <Fullscreen enabled ={this.state.isFull} onChange = {isFull => this.setState({isFull})}>
            //       <Leaderboard />
            //     </Fullscreen> */}
            // {/* </div> */}
            <div className="Leaderboard">
               { leaderboard( chalTypeId[0] ) }
            </div>
        )
    }
}

export default Leaderboard