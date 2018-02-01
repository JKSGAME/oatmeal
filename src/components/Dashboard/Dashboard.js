import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import CreateChallengeModal from './CreateChallengeModal/CreateChallengeModal';
import CurrentChallengeModal from './CurrentChallengeModal/CurrentChallengeModal';
import Leaderboard from '../Leaderboard/Leaderboard';
import CreateBadgeModal from '../Badges/CreateBadgeModal';
import axios from 'axios';



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
    let chalLength = challenges.length
    let curChal = challenges.map( ( e, i ) => {
      return(
        <div>
          <div className='chal-box' key={e.name} onClick={() => this.props.history.push(`/leaderboard/${e.challenge_id}`)}>
            <h3>{e.name}</h3>
            <h4>Challenge mode: {e.mode}</h4>
            <h4>KPI: {e.kpi}</h4>
          </div>
        </div>
      )
    })

    let remaining =  () => {
      let buttonArr = [];
      for(let i = chalLength; i< 5; i++){
      buttonArr.push(
        <div className="create-challenge">
          <CreateChallengeModal />
        </div>
      )}
        return buttonArr
    }


    

    return (
      <div className="flex-row">
        <div className="sidebar">
          <div className="icon-column"></div>
          
        </div>
        <div className="Dashboard">
          <header>
            <h1>Challenges</h1>
          </header>
          <div className="dashboard-container">
            <div className='chal-box-wrapper'>
              { curChal }
              { remaining() }
              <div className="create-challenge">
                  <CreateChallengeModal />
              </div>
            </div>
          </div>
        <div className='modals'>
          <CurrentChallengeModal history={this.props.history} challengeId={this.state.challenges.challenge_id} />
          <CreateBadgeModal />
        </div>
          <Link to="/dummycrm" ><button className="crm-btn">Sample CRM</button></Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;