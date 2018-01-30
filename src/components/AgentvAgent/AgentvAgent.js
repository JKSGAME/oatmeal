import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './AgentvAgent.css';
import { connect } from 'react-redux';
import { fetchAVAData } from './../../ducks/reducer';
import _ from "lodash";
import axios from 'axios';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';

import io from 'socket.io-client'
const socket = io()

class AgentvAgent extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            standings: {},
        }


    }

    componentDidMount() {
        this.props.fetchAVAData()
        let roomId = 1
        console.log(this.props.challengeId)
        if ( roomId > 0 ) {
        
            socket.emit( 'join room', {
                room: roomId
            })
        }
        
        socket.on( 'response', res => {
            let standings = _.at(res, "standings")
            this.setState({
                standings: standings[0]
            })
        })
        let empty = _.isEmpty(this.state.standings)
        if( empty ) {
            axios.get(`/api/leaderboard/${1}`, ).then( res =>{
                let standings = _.map(res.data, "standings")
                let standingsNew = eval( " ( "+standings[0]+" ) " )
                this.setState({
                    standings: standingsNew
                })
            })
            
        }

    }
        

    // componentWillReceiveProps(props) {
    //     console.log(this.props, 'hit')
    // }
    

    render() {
    return (
        <div className="AgentvAgent">
            <div className="AVA-title">
                <h2>{this.props.challengeData.length > 0 && this.props.challengeData[0].name}</h2>
                <p>{this.props.challengeData.length > 0 && this.props.challengeData[0].description}</p>
            </div>
            <div className="AVA-leaderboard-data">
                <div className="AVA-FirstPlaceAgent-Placement">
                    <FirstPlaceAgent standings={this.state.standings}/>
                </div>
                <div className="AVA-SecondThirdUnrankedAgent-Placement">
                    <SecondThirdUnrankedAgent standings={this.state.standings}/>
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