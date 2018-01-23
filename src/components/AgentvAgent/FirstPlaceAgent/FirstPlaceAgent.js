import React, { Component } from 'react';
import './FirstPlaceAgent.css';
import { connect } from 'react-redux'
import { fetchAVAData } from './../../../ducks/reducer'

class FirstPlaceAgent extends Component {

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
    console.log(this.state)
    return (
      <div className="AVA-FirstPlaceAgent">
        <div className="AVA-FirstPlaceAgent-Image">
          <h1>1st Place</h1>
          <img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi5j-Wcke3YAhUHw2MKHXiTBxQQjRwIBw&url=https%3A%2F%2Fwww.rifftrax.com%2Friffer%2Fweird-al-yankovic&psig=AOvVaw2Ar04r_EUNCpr00RG1m_sA&ust=1516764220110342" alt="weird al" />
        </div>
        <div className="AVA-first-data">
          <h1>Weird Al</h1>
          <h3>Red Team</h3>
          <h4>16</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return { challengeData: state.challengeDataAVA }
}

export default connect( mapStateToProps, { fetchAVAData } )( FirstPlaceAgent )