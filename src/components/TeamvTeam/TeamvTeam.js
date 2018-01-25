import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import './TeamvTeam.css';
import { connect } from 'react-redux'
import { fetchTVTData } from './../../ducks/reducer'
import TVTFirstPlaceTeam from './TVTFirstPlaceTeam/TVTFirstPlaceTeam';
import TVTSecondPlaceTeam from './TVTSecondPlaceTeam/TVTSecondPlaceTeam';

class TeamvTeam extends Component {

  componentDidMount() {
    this.props.fetchTVTData()
  }

  render() {
  return (
        <div className="TeamvTeam">
          <div className="TVT-title">
            <h1>{this.props.challengeData.length > 0 && this.props.challengeData[0].name}</h1>
            <p>{this.props.challengeData.length > 0 && this.props.challengeData[0].description}</p>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTVTData
}, dispatch )

export default connect( mapStateToProps, mapDispatchToProps )( TeamvTeam )