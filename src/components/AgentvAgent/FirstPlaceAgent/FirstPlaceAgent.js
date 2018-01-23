import React, { Component } from 'react';
import './FirstPlaceAgent.css';
import { connect } from 'react-redux'
import { fetchAVAData } from './../../../ducks/reducer'


class FirstPlaceAgent extends Component {

  constructor(props) {
    super(props)

    this.state = {

      challengeData: []

    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })


  componentDidMount() {
    this.props.fetchAVAData()

  }

  componentWillReceiveProps(props) {
    this.setState({
      challengeData: props.challengeData
    })
  }

  render() {
    
    return (
      <div className="AVA-FirstPlaceAgent">
        <img src="" alt="" />
        <div className="AVA-first-data">
          <h1>name</h1>
          <h3>team</h3>
          <span>kpi total</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { challengeData: state.challengeDataAVA }
}

export default connect(mapStateToProps, { fetchAVAData })(FirstPlaceAgent)