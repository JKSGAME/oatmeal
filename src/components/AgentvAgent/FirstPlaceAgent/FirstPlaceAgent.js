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
  constructor() {
    super()
    this.state = {
      sortedUsers: []
    }
  }
  componentDidMount() {
    // console.log('hit')
    this.props.fetchUsers()

    socket.on('response', data => {
      let standings = data.standings
      console.log(standings, "new freaking standings")
    })

    axios.get('/api/viewmore').then(res => {
      let userArr = []
      res.data.map((e, i) => {
        let standingsObj = eval('(' + e.standings + ')')
        return userArr.push({
          index: i,
          userId: e.user_id,
          name: e.user_name,
          team: e.team,
          kpi: e.kpi,
          standings: standingsObj[e.user_id],
          photos: e.photos
        })
      })
      let orderedUsers = _.orderBy(userArr, ['standings.salesKPI'], ['desc'])
      this.setState({
        sortedUsers: orderedUsers
      })
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        {/* <div className="AVA-FirstPlaceAgent">
          <div className="AVA-FirstPlaceAgent-Image">
            <h1>1st Place</h1>
            <img src="" alt="" />
          </div> */}
          {/* <div className="AVA-first-data"> */}
          {/* <h1>{this.props.users.length > 0 && this.props.users[0].name} </h1>
              <h3>{this.props.users.length > 0 && this.props.users[0].team}</h3>
              <h4>{this.props.users.length > 0 && this.props.users[0].standings.dialsKPI}</h4>
            </div> */}
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
                <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4>
                </div>
              </div>
            }
          })}
        {/* </div> */}
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