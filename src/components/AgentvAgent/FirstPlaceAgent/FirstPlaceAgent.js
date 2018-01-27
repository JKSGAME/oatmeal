import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './FirstPlaceAgent.css';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../ducks/reducer';
import io from 'socket.io-client'

const socket = io()

class FirstPlaceAgent extends Component {

  componentDidMount() {
    this.props.fetchUsers()
    
    socket.on('response', data =>{
      let standings = data.standings
      console.log(standings, "new freaking standings")
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
          <div className="AVA-FirstPlaceAgent">
            <div className="AVA-FirstPlaceAgent-Image">
              <h1>1st Place</h1>
              <img src="" alt="" />
            </div>
            <div className="AVA-first-data">
              <h1>{this.props.users.length > 0 && this.props.users[0].name} </h1>
              <h3>{this.props.users.length > 0 && this.props.users[0].team}</h3>
              <h4>{this.props.users.length > 0 && this.props.users[0].standings.dialsKPI}</h4>
            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return { 
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch )

export default connect( mapStateToProps, mapDispatchToProps )( FirstPlaceAgent )