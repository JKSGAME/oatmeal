import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Fullscreen from 'react-full-screen';
import './Dashboard.css'
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal'
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal'
import Leaderboard from '../Leaderboard/Leaderboard';
import axios from 'axios'



class Dashboard extends Component {
  constructor(props) {
    super()
    this.state = {
      standings: "Initial Standings",
      isFull: false,
      challenges: []
    }

  }
  goFull = () => {
    this.setState({ isFull: true })
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
    console.log('challenges', challenges);
    const curChal = challenges.map( (e, i) => {
      console.log('e',e);
      return (
        <div className='chal-box' key={e.user_id}>
          <h3>{e.name}</h3>
          <h4>Challenge mode: {e.mode}</h4>
          <h4>End time: {e.time_end}</h4>
          <h4>KPI: {e.kpi}</h4>
        </div>
      )
    })
    return (
      <div className="Dashboard">
        <header>
          <h1>Welcome to the Dashboard</h1>
        </header>
        {/* <button onClick= {this.goFull}>Fullscreen</button> */}
        {/* <div className='board'> */}
            {/* <Fullscreen enabled ={this.state.isFull} onChange = {isFull => this.setState({isFull})}>
              <Leaderboard />
            </Fullscreen> */}
        {/* </div> */}
        <div className='chal-box-wrapper'>
        {curChal}
        </div>
        <div className='modals'>
          <CreateChallengeModal />
          <CurrentChallengeModal history={this.props.history} />
        </div>
        <Link to="/dummycrm" ><button className="crm-btn">Sample CRM</button></Link>
      </div>
    );
  }
}

export default Dashboard;