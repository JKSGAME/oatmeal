import React, { Component } from 'react'
import axios from 'axios'
import AgentvAgent from './../AgentvAgent/AgentvAgent'
import TeamvTeam from './../TeamvTeam/TeamvTeam'
import './Leaderboard.css'
import _ from "lodash"
import Sidebar from './../Dashboard/Sidebar/Sidebar'


class Leaderboard extends Component {
    constructor( props ){
        super( props )
        this.state={
            challenges: {}, 
        } 
    }
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
            <div className="Leaderboard">
                <div  className="sidebar">
                    <Sidebar />
                </div>
                <div className='board'>
                    { leaderboard( chalTypeId[0] ) }
                </div> 
            </div>
        )
    }
}
export default Leaderboard