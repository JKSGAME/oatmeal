import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Fullscreen from 'react-full-screen';
import './Dashboard.css'
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal'
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal'
import Leaderboard from '../Leaderboard/Leaderboard';



class Dashboard extends Component {
  constructor(props) {
    super()
    this.state = {
      standings: "Initial Standings",
      isFull: false,
    }

  }
  goFull = () => {
    this.setState({ isFull: true })
  }

  render() {
    return (
      <div className="Dashboard">
        <header>
          <h1>Welcome to the Dashboard</h1>
        </header>
        <button onClick= {this.goFull}>Fullscreen</button>
        <div className='board'>
          <button className="toggle_left" >Prev</button>
            <Fullscreen enabled ={this.state.isFull} onChange = {isFull => this.setState({isFull})}>
              <Leaderboard />
            </Fullscreen>
          <button className="toggle_right">Next</button>
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