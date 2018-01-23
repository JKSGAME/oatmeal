import React, { Component } from 'react';
import './DummyCrm.css'
import DummyUser from './DummyUsers/DummyUser.js'
import axios from 'axios'

import io from 'socket.io-client';
const socket = io()

class DummyCrm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      standings: "Initial Standings"
    }

    
    socket.on('response', data =>{
      console.log("response data")
      let stringData = JSON.stringify(data.standings)
      this.setState( {standings: stringData})
    })
    
  }
  
  componentDidMount() {
    axios.get('/api/users').then( ( res ) => {
      this.setState({
        users: res.data[0],
        teams: res.data[1]
      })
      console.log(this.state.users)
    })
  }
  
  render() {
    return (
      <div className="DummyCrm">
        <header>
          <h1>Dummy CRM</h1>
          <h2>{this.state.standings}</h2>
        </header>
        <div className='dummy-user-layout'>
          <div className='dummy-data'>
            {this.state.users.map( ( e, i ) => {
              return <DummyUser key={i} id = {e.user_id} name={e.user_name} team={this.state.teams[(e.team_id * 1) - 1].team} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DummyCrm;