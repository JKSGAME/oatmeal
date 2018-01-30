import React, { Component } from 'react';
import './SecondThirdUnrankedAgent.css';
import ViewMoreModal from '../../ViewMoreModal/ViewMoreModal';
import { connect } from 'react-redux';
import { fetchAVAData } from './../../../ducks/reducer';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './../../../ducks/reducer';
import _ from 'lodash';
import axios from 'axios';

class SecondThirdUnrankedAgent extends Component {
    constructor() {
        super()
        this.state = {
            sortedUsers: []
        }
    }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    componentWillReceiveProps(nextProps) {
        axios.get('/api/viewmore').then(res => {
          let userArr = []
          res.data.map((e, i) => {
            return userArr.push({
              index: i,
              userId: e.user_id,
              name: e.user_name,
              team: e.team,
              kpi: e.kpi,
              photos: e.photos,
              standings: _.at(nextProps.standings, e.user_id)
            })
          })
          let orderedUsers = _.orderBy(userArr, ['standings[0].salesKPI'], ['desc'])
          // FIX HARD CODING OF KPI TYPE
          this.setState({
            sortedUsers: orderedUsers,
          })
        })
      }

    render() {
        return (
            <div>
                <div className="SecondThirdUnranked">
                    <div className="SecondThirdAgents">
                        <div className="SecondPlaceAgent">
                        {/* MAP OVER OBJECT ONCE TO GET 1ST, 2ND, 3RD AND UNRANKED 
                            set transformations in requestAnimationFrams look up what is possible*/}
                        {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                            if(i === 1) {
                                return <div key={i} className="SecondPlaceAgent">
                                    <img className='prof-pic' src={e.photos} alt=""/>
                                    <h4>2nd place:</h4>
                                    <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                    <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                    <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings[0].salesKPI}</h4>
                                </div>
                            }
                            })}
                        </div>
                        <div className="ThirdPlaceAgent">
                        {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                            if(i === 2) {
                                return <div key={i} className="ThirdPlaceAgent">
                                    <img className='prof-pic' src={e.photos} alt=""/>
                                    <h4>3rd place:</h4>
                                    <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                    <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                    <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings[0].salesKPI}</h4>
                                </div>
                            }
                            })}
                        </div>
                    </div>
                    <div className="UnrankedAgents">
                        <div className="AVA-unranked-data">
                            <div className="AVA-unranked-ranking">
                                {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                if(i > 2 && i < 5) {
                                    return <div key={i} className="AVA-Unranked-lineItem">
                                        <img className='prof-pic' src={e.photos} alt=""/>
                                        <h4>{i + 1}th place</h4>
                                        <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                        <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                        <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings[0].salesKPI}</h4>
                                    </div>
                                }
                                })}
                            </div>
                        </div>
                        <ViewMoreModal/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SecondThirdUnrankedAgent)