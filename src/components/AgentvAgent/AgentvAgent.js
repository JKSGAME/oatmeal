import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './AgentvAgent.css';
import { connect } from 'react-redux';
import { fetchAVAData } from './../../ducks/reducer';
import _ from "lodash";
import axios from 'axios';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import io from 'socket.io-client'
import AgentRanking from './AgentRanking/AgentRanking';
const socket = io()

class AgentvAgent extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            standings: {},
        }


    }

    componentDidMount(props) {
        this.props.fetchAVAData()
        let roomId = this.props.challengeId
        if ( roomId > 0 ) {
            socket.emit( 'join room', {
                room: roomId
            })
        }
        
        socket.on( 'response', res => {
            let standings = _.at( res, "standings" )
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

    render() {
        console.log(this.props.challengeData)

    return (
        <div className="AgentvAgent">
        <div className='navBar'>
          <Sidebar as={Menu} direction='top' visible inverted width='wide'>
          <Link to='/' ><Menu.Item name='home'><Icon name='home'/>Home</Menu.Item></Link>
            {/* <Menu.Item name='gamepad'><Icon name='gamepad' />Games</Menu.Item>
            <Menu.Item name='camera'><Icon name='camera' />Channels</Menu.Item> */}
          </Sidebar>
      </div>
            {/* <div className="AVA-title">
                <h2>{this.props.challengeData.length > 0 && this.props.challengeData[0].name}</h2>
                <p>{this.props.challengeData.length > 0 && this.props.challengeData[0].description}</p>
            </div> */}
            <div className="AVA-leaderboard-data">
                <div className="AVA-FirstPlaceAgent-Placement">
                    <AgentRanking standings={this.state.standings} challengeId={this.props.challengeId} challengeData={this.props.challengeData}/>
                </div>
                <div className="AVA-SecondThirdUnrankedAgent-Placement">
                    {/* <SecondThirdUnrankedAgent/> */}
                </div>
                </div>
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