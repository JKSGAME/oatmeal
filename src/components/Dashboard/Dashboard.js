import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Dashboard.css'
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal'
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal'
import Leaderboard from '../Leaderboard/Leaderboard';
// import Carousel from '../Carousel/Carousel';


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      standings: "Initial Standings"
    }

  }

  render() {
    return (
      <div className="Dashboard">
        <header>
          <h1>Welcome to the Dashboard</h1>
        </header>
        <div className='board'>
          <button className="toggle_left" >Prev</button>
          {/* <Carousel> */}
            <Leaderboard />
            {/* <li>1</li> */}
          {/* </Carousel> */}
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