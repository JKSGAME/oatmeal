import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Dashboard.css'
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal'
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal'
import Leaderboard from '../Leaderboard/Leaderboard';
import axios from 'axios'



class Dashboard extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      standings: "Initial Standings",
      challenges: []
    }
  }

  componentDidMount() {
    axios.get( '/api/fullChallengeTable' ).then( res => {
      this.setState({
          challenges: res.data
      })
    })
}

  render() {
    const { challenges } = this.state
    let curChal = challenges.map( ( e, i ) => {
      return (
        <div className='chal-box' key={e.name} onClick={() => this.props.history.push(`/leaderboard/${e.challenge_id}`)}>
          <h3>{e.name}</h3>
          <h4>Challenge mode: {e.mode}</h4>
          <h4>KPI: {e.kpi}</h4>
        </div>
      )
    })
    return (
      <div className="Dashboard">
        <header>
          <h1>Welcome to the Dashboard</h1>
        </header>
        <div className='chal-box-wrapper'>
        {curChal}
        </div>
        <div className='modals'>
          <CreateChallengeModal />
          <CurrentChallengeModal history={this.props.history} challengeId={this.state.challenges.challenge_id} />
        </div>
        <Link to="/dummycrm" ><button className="crm-btn">Sample CRM</button></Link>
      </div>
    );
  }
}

export default Dashboard;