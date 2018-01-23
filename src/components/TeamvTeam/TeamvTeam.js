import React, { Component } from 'react';
import './TeamvTeam.css';
import { connect } from 'react-redux'
import { fetchTVTData } from './../../ducks/reducer'
import TVTFirstPlaceTeam from './TVTFirstPlaceTeam/TVTFirstPlaceTeam';
import TVTSecondPlaceTeam from './TVTSecondPlaceTeam/TVTSecondPlaceTeam';

class TeamvTeam extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      challengeData: []
    }
  }

  componentDidMount() {
    this.props.fetchTVTData()
  }

  componentWillReceiveProps( props ) {
    this.setState({
      challengeData: props.challengeData
    })
  }

  render() {
    console.log(this.state.challengeData)
  return (
        <div className="TeamvTeam">
          <div className="TVT-title">
            <h1>{this.state.challengeData.length > 0 && this.state.challengeData[0].name}</h1>
            <p>{this.state.challengeData.length > 0 && this.state.challengeData[0].description}</p>
          </div>
          <div className="TVT-leaderboard-data">
            <div className="TVT-FirstPlaceTeam-Placement">
              <TVTFirstPlaceTeam/>
            </div>
            <div className="TVT-SecondPlaceTeam-Placement">
              <TVTSecondPlaceTeam/>
            </div>
          </div>
        </div>
  )}
}

function mapStateToProps( state ) {
  return { challengeData: state.challengeDataTVT }
}

export default connect( mapStateToProps, { fetchTVTData } )( TeamvTeam )