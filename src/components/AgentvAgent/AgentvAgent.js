import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './AgentvAgent.css';
import { connect } from 'react-redux';
import { fetchAVAData } from './../../ducks/reducer';
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';

class AgentvAgent extends Component {

    componentDidMount() {
        this.props.fetchAVAData()
      }

    render() {
    return (
        <div className="AgentvAgent">
            <div className="AVA-title">
                <h2>{this.props.challengeData.length > 0 && this.props.challengeData[0].name}</h2>
                <p>{this.props.challengeData.length > 0 && this.props.challengeData[0].description}</p>
            </div>
            <div className="AVA-leaderboard-data">
                <div className="AVA-FirstPlaceAgent-Placement">
                    <FirstPlaceAgent/>
                </div>
                <div className="AVA-SecondThirdUnrankedAgent-Placement">
                    <SecondThirdUnrankedAgent/>
                </div>
            </div>
        </div>
    )}
}

function mapStateToProps( state ) {
    return { challengeData: state.challengeDataAVA }
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAVAData
}, dispatch )

export default connect( mapStateToProps, mapDispatchToProps )( AgentvAgent )