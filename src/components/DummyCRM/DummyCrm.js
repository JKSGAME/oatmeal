import React, { Component } from 'react';
import './DummyCrm.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DummyUser from './DummyUsers/DummyUser.js'
import { getStandings } from './../../ducks/reducer'
import { Dropdown } from 'semantic-ui-react';
import _ from 'lodash'


import io from 'socket.io-client';
const socket = io()

class DummyCrm extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      users: [],
      standings: {},
      challenges: [],
      challengeId: 0
    }

    this.handleChange = this.handleChange.bind( this )
  }

  // this.state.challenge[d.value].standings but with lodash so it works
  // pass this.state.standings as a prop to dummyUser, 
  // on dummyUser check if this.props.standings is empty object, default to 0 kpi if it is
  // if this.props.standings is not empty parse out scores based on user id

  handleChange ( e, d ) {
    this.setState({
      challengeId: d.value,
    })

    axios.get( `/api/leaderboard/${d.value}` ).then( async res => {
      await this.setState({
        standings: res.data
      })
    })
    
  }
  
  componentDidUpdate(){

    // console.log( this.state.standings )
    

    let standingsNew = _.map( this.state.challenges, 'challenge_id' ) 
    let roomId = this.state.challengeId
    
    
    if ( roomId > 0 ) {
      socket.emit( 'join room', {
        room: roomId
      })
    }
    
    // socket.on( 'connection', socket => {
      //   socket.join( roomId )
      //   console.log( roomId, "socket has roomid" )
      // })
      
      
      // socket.on('response', data =>{
        //   let newStandings = data.standings
        //   this.props.getStandings({
          //     standings: newStandings
          //   })
  // })

}


  componentDidMount() {
    axios.get( '/api/users' ).then( res => {
      this.setState({
        users: res.data[0],
        teams: res.data[1]
      })
    })

    axios.get( '/api/fullChallengeTable' ).then( res => {
      this.setState({
          challenges: res.data
      })
    })

  }
  
  render() {
    // console.log(this.state.standings)
    const { challenges } = this.state

    const challengeDropdown = challenges.map( ( e, i ) => {
      return { key: e.challenge_id, text: e.name, value: e.challenge_id, id: e.name }
    })
    return (
      <div className="DummyCrm">
        <header>
          <h1>Dummy CRM</h1>
          <Link to='/'><button>Back to Dashboard</button></Link>
          <div>
          <Dropdown placeholder='Select Challenge' floating search selection 
            options={challengeDropdown} 
            text={challengeDropdown.text} 
            value={challengeDropdown.value} 
            onChange={this.handleChange}
          />
          </div>
        </header>
        <div className='dummy-user-layout'>
          <div className='dummy-data'>
            {this.state.users.map( ( e, i ) => {
              return <DummyUser 
                key={i} 
                standings={this.state.standings} 
                id={e.user_id} 
                name={e.user_name} 
                team={this.state.teams[(e.team_id * 1) - 1].team} 
                challengeId={this.state.challengeId}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    standings: state.standings
  }
}


export default connect(mapStateToProps, {getStandings: getStandings})(DummyCrm);