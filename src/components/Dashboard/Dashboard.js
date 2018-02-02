import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal';
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal';
import axios from 'axios';
import Sidebar from './Sidebar/Sidebar'
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      standings: "Initial Standings",
      challenges: []
    }
  }
  componentDidMount() {
    axios.get('/api/fullChallengeTable').then(res => {
      this.setState({
        challenges: res.data
      })
    })
  }
  render() {
    const { challenges } = this.state
    let chalLength = challenges.length
    let curChal = challenges.map((e, i) => {
      return (
        <div key={e.id}>
          <div className='chal-box' key={e.name} onClick={() => this.props.history.push(`/leaderboard/${e.challenge_id}`)}>
            <h3>{e.name}</h3>
            <h4>Challenge mode: {e.mode}</h4>
            <h4>KPI: {e.kpi}</h4>
          </div>
        </div>
      )
    })
    let remaining = () => {
      let buttonArr = [];
      for (let i = chalLength; i < 5; i++) {
        buttonArr.push(
          <div className="create-challenge-off" key={i}>
            <CreateChallengeModal />
          </div>
        )
      }
      return buttonArr
    }
    return (
      <div className="flex-row">
        <div className="Dashboard">
        <div className="sidebar">
          <Sidebar/>
        </div>
          <header>
            <h1>Dashboard</h1>
          </header>
          <div className="dashboard-container">
            <div className='chal-box-wrapper'>
              {curChal}
              {remaining()}
              <div className="create-challenge">
                <CreateChallengeModal />
              </div>
            </div>
          </div>
        <div className='modals'>
          <CurrentChallengeModal history={this.props.history} challengeId={this.state.challenges.challenge_id} />
          </div>
          </div>
      </div>
      </div>
    );
  }
}
export default Dashboard;