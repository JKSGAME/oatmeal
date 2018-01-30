import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './FirstPlaceAgent.css';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../ducks/reducer';
import axios from 'axios';
import _ from 'lodash';
import { Card, Icon, Image, Header } from 'semantic-ui-react'




class FirstPlaceAgent extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      sortedUsers: [],
      standings: {}
    }
  }
  componentWillReceiveProps( nextProps ) {
    axios.get( '/api/viewmore' ).then( res => {
      let userArr = []
      res.data.map( ( e, i ) => {
        return userArr.push({
          index: i,
          userId: e.user_id,
          name: e.user_name,
          team: e.team,
          kpi: e.kpi,
          photos: e.photos,
          standings: _.at( nextProps.standings, e.user_id )
        })
      })
      // kpi needs to be deined (passed in from dashboard)
      let kpiTest = 'Sales'
      let orderedUsers = []
      console.log(orderedUsers)
      if ( kpiTest === 'Sales' ) {
        return orderedUsers = _.orderBy( userArr, ['standings[0].salesKPI'], ['desc'] )
      } else if ( kpiTest === 'Dials' ) {
        return orderedUsers = _.orderBy( userArr, ['standings[0].dialsKPI'], ['desc'] )
      }
      this.setState({
        sortedUsers: orderedUsers,
      })
    })
  }


  render() {
    console.log(this.state.sortedUsers)
    // kpi needs to be defined (passed in from dashboard)
    let kpiTest = 'Sales'
    let kpiTotal = function( kpiTest ) {
      if( kpiTest === 'Sales' ) {
        return <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[0].standings[0].salesKPI}</h4>
      } else if ( kpiTest === 'Dials' ) {
        return <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[0].standings[0].dialsKPI}</h4>
      }
    }
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
              { kpiTotal( kpiTest ) } 
            </div>
          {/* {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more.  */}
            {/* if (i === 0) {
              return <div key={i} className="AVA-FirstPlaceAgent">
                <h1>1st place:</h1>
                <div className="AVA-FirstPlaceAgent-Image"></div>
                  <img src={e.photos} alt="" />
                </div>
                <div className='AVA-first-data'>
                <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings[0].salesKPI}</h4>
                </div>
              </div>
            }
          })} */}
        </div>
      </div>
    )
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