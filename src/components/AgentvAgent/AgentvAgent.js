import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './AgentvAgent.css';
import { connect } from 'react-redux';
import { fetchAVAData } from './../../ducks/reducer';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';

import io from 'socket.io-client'
const socket = io()

class AgentvAgent extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            standings: {}
        }

    this.updateStandings = this.updateStandings.bind( this )

    }

    componentDidMount() {
        this.props.fetchAVAData()
    }

    componentWillReceiveProps() {

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
        console.log(standings, "standings obj on ava")
        this.setState({
            standings: standings
        })
    }


    

    render() {
        console.log(this.props.chalid)
    return (
        <div className="AgentvAgent">
            <div className="AVA-title">
                <h2>{this.props.challengeData.length > 0 && this.props.challengeData[0].name}</h2>
                <p>{this.props.challengeData.length > 0 && this.props.challengeData[0].description}</p>
            </div>
            <div className="AVA-leaderboard-data">
                <div className="AVA-FirstPlaceAgent-Placement">
                    <FirstPlaceAgent/>
                </div>
                <div className="AVA-SecondThirdUnrankedAgent-Placement">
                    <SecondThirdUnrankedAgent/>
                </div>
            </div>
        </div>
    )}
}

function mapStateToProps( state ) {
    return { challengeData: state.challengeDataAVA }
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAVAData
}, dispatch )

export default connect( mapStateToProps, mapDispatchToProps )( AgentvAgent )