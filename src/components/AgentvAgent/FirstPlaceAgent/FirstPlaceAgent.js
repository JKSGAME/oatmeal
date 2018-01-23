import React, { Component } from 'react';
import './FirstPlaceAgent.css';
import { connect } from 'react-redux'
import { fetchAVAData } from './../../../ducks/reducer'
import { Button, Header, Modal, Image, Tab } from 'semantic-ui-react'
import axios from 'axios';


class FirstPlaceAgent extends Component {

  constructor( props ) {
    super( props ) 

    this.state = {

        challengeData: [],
        open: false,
        users:[]

    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })


  componentDidMount() {
    this.props.fetchAVAData()

    axios.get('/api/users').then( res => {
      console.log('res.data', res.data);
      this.setState({
        users: res.data
      })
    })
  }

  componentWillReceiveProps( props ) {
    this.setState({
        challengeData: props.challengeData
    })
  }

  render() {
    console.log(this.state)
    const { open, dimmer, users } = this.state
    const userInfo = this.state.users.map( e => {
      return { name: e.name, team: e.team, userType: e.user_type, pic: e.photos }
    })

    return (
      <div className="AVA-FirstPlaceAgent">
        <img src="" alt="" />
        <div className="AVA-first-data">
          <h1>name</h1>
          <h3>team</h3>
          <span>kpi total</span>
        </div>
        <Button onClick={this.show('blurred')}>Profile</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Personal Profile</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>List of challenges here</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return { challengeData: state.challengeDataAVA }
}

export default connect( mapStateToProps, { fetchAVAData } )( FirstPlaceAgent )