import React, { Component } from 'react';
import './AgentvAgent.css';
import { connect } from 'react-redux'
import { fetchAVAData } from './../../ducks/reducer'
import FirstPlaceAgent from './FirstPlaceAgent/FirstPlaceAgent';
import SecondThirdUnrankedAgent from './SecondThirdUnrankedAgent/SecondThirdUnrankedAgent';

class AgentvAgent extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            challengeData: []
        }
    }

    componentDidMount() {
        this.props.fetchAVAData()
      }
    
      componentWillReceiveProps( props ) {
        this.setState({
          challengeData: props.challengeData
        })
      }

    render() {
        console.log(this.state.challengeData)
    return (
        <div className="AgentvAgent">
            <div className="AVA-title">
                <h2>{this.state.challengeData.length > 0 && this.state.challengeData[0].name}</h2>
                <p>{this.state.challengeData.length > 0 && this.state.challengeData[0].description}</p>
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
  
  export default connect( mapStateToProps, { fetchAVAData } )( AgentvAgent )