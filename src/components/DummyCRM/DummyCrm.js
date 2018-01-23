import React, { Component } from 'react';
import './DummyCrm.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DummyUser from './DummyUsers/DummyUser.js'
import { getStandings } from './../../ducks/reducer'


import io from 'socket.io-client';
const socket = io()

class DummyCrm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      standings: "Initial Standings"
    }
    
    
    
  }
  componentDidUpdate(){
  socket.on('response', data =>{
    let newStandings = data.standings
    this.props.getStandings({
      standings: newStandings
    })
  })
  }
  
  componentDidMount() {
    axios.get('/api/users').then( ( res ) => {
      this.setState({
        users: res.data[0],
        teams: res.data[1]
      })
    })
  }
  
  render() {
    return (
      <div className="DummyCrm">
        <header>
          <h1>Dummy CRM</h1>
          <Link to='/'><button>Back to Dashboard</button></Link>
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

function mapStateToProps(state){
  return{
    standings: state.standings
  }
}


export default connect(mapStateToProps, {getStandings: getStandings})(DummyCrm);