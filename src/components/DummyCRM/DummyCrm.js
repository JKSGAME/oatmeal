import React, { Component } from 'react';
import './DummyCrm.css'
import DummyUser from './DummyUsers/DummyUser.js'
import axios from 'axios'

class DummyCrm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

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
        </header>
        <div className='dummy-user-layout'>
          <div className='dummy-data'>
            {this.state.users.map( ( e, i ) => {
              return <DummyUser key={i} id = {e.id} name={e.name} team={this.state.teams[(e.team_id * 1) - 1].team} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DummyCrm;