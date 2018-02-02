import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './AgentvAgent.css';
import { connect } from 'react-redux';
import { fetchAVAData } from './../../ducks/reducer';
import _ from "lodash";
import axios from 'axios';
import Fullscreen from 'react-full-screen';
import io from 'socket.io-client';
import AgentRanking from './AgentRanking/AgentRanking';
import fullicon from '../../icon/fullscreen.png';

const socket = io()


class AgentvAgent extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            standings: {},
            isFull: false, 
        }
    }
    componentDidMount() {
        // this.props.fetchAVAData()
        let roomId = this.props.challengeId
        console.log(roomId)
        if ( roomId > 0 ) {
            socket.emit( 'join room', {
                room: roomId,
            })
        }
        
        socket.on( 'response', data => {
            console.log("hit")
            let standings = _.at( data, "standings" )
            this.setState({
                standings: standings[0]
            })
        })
        let empty = _.isEmpty(this.state.standings)
        if( empty ) {
            axios.get( `/api/leaderboard/${this.props.challengeId}` ).then( res => {
                let standings = _.map( res.data, "standings" )
                let standingsNew = eval( " ( "+standings[0]+" ) " )
                this.setState({
                    standings: standingsNew
                })
            })   
        }
    }

    goFull = () => {
        this.setState({ isFull: true })
    }

    render() {
    return (
        <div>
            <button onClick= {this.goFull} className="fullscreen-button">
                <img src={fullicon} className="fullscreen-icon" alt='full screen option'/>
            </button>
            <Fullscreen enabled ={this.state.isFull} onChange = {isFull => this.setState({isFull})}>
                <div className="AgentvAgent">
                    <div className="AVA-leaderboard-data">
                        <div className="AVA-FirstPlaceAgent-Placement">
                                <AgentRanking standings={this.state.standings} challengeId={this.props.challengeId} challengeData={this.props.challengeData}/>
                        </div>
                    </div>
                </div>
            </Fullscreen>
        </div>
        )
    }
}
function mapStateToProps( state ) {
    return { challengeData: state.challengeDataAVA }
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAVAData
}, dispatch )
export default connect( mapStateToProps, mapDispatchToProps )( AgentvAgent )