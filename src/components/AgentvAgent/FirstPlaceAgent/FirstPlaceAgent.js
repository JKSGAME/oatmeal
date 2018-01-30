import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './FirstPlaceAgent.css';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../ducks/reducer';
import io from 'socket.io-client'
import axios from 'axios';
import _ from 'lodash';

const socket = io()



class FirstPlaceAgent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedUsers: [],
      standings: {}
    }
  }
  componentDidMount() {
    axios.get('/api/viewmore').then(res => {
      let userArr = []
      res.data.map((e, i) => {
        console.log(e)
        return userArr.push({
          index: i,
          userId: e.user_id,
          name: e.user_name,
          team: e.team,
          kpi: e.kpi,
          photos: e.photos,
          standings: _.at(this.props.standings, e.user_id)
        })
      })
      let orderedUsers = _.orderBy(userArr, ['standings[0].salesKPI'], ['desc'])
      // FIX HARD CODING OF KPI TYPE
      console.log(orderedUsers, "user array")
      this.setState({
        sortedUsers: orderedUsers,
      })
    })
  }


  render() {
    console.log(this.state.sortedUsers[0])
    return (
      <div>
        <div className="AVA-FirstPlaceAgent">
          <div className="AVA-FirstPlaceAgent-Image">
            <h1>1st Place</h1>
            <img src="" alt="" />
          </div>
          <div className="AVA-first-data">
          <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[0].name} </h1>
              <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[0].team}</h3>
              <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[0].standings[0].dialsKPI}</h4>
            </div>
          {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
            if (i === 0) {
              return <div key={i} className="AVA-FirstPlaceAgent">
                <h1>1st place:</h1>
                <div className="AVA-FirstPlaceAgent-Image">
                  <img src={e.photos} alt="" />
                </div>
                <div className='AVA-first-data'>
                <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings[0].salesKPI}</h4>
                </div>
              </div>
            }
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FirstPlaceAgent)