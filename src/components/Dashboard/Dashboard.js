import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal';
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal';
import Header from '../Header/Header'
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
          <div className='chal-box hvr-float' key={e.name} onClick={() => this.props.history.push(`/leaderboard/${e.challenge_id}`)}>
            <div className="card-content">
              <h3>{e.name}</h3>
              <h4>Challenge mode: {e.mode}</h4><br/>
              <h4>KPI: {e.kpi}</h4>
            </div>
          </div>
        </div>
      )
    })
    let remaining = () => {
      let buttonArr = [];
      for (let i = chalLength; i < 5; i++) {
        buttonArr.push(
          <div className="create-challenge-off hvr-float" key={i}>
            <div className="create-content">
              <CreateChallengeModal />
            </div>
          </div>
        )
      }
      return buttonArr
    }
    return (
      <div className="flex-row">
        <div className="Dashboard">
          <div className="sidebar">
            <Sidebar history={this.props.history} challengeid={this.props.challenge_id}/>
          </div>

          <div className="logo-location">
            <Header />
          </div>

          <div className="dash">
            <h2>Dashboard</h2>
            <div className="dashboard-container">
              <div className='chal-box-wrapper'>
                {curChal}
                {remaining()}
                <div className="create-challenge hvr-float">
                  <div className="create-content">  
                    <CreateChallengeModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;