import React, { Component } from 'react';
import './SecondThirdUnrankedAgent.css'
import UsersModal from '../../UsersModal/UsersModal'
import { connect } from 'react-redux'
import { fetchAVAData } from './../../../ducks/reducer'
import { bindActionCreators } from 'redux';
import { fetchUsers } from './../../../ducks/reducer';
import _ from 'lodash';
import axios from 'axios'

class SecondThirdUnrankedAgent extends Component {
    constructor() {
        super()
        this.state = {
            sortedUsers: []
        }
    }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    componentDidMount() {
        // this.props.fetchUsers()
        axios.get('/api/viewmore').then(res => {
            console.log('res.data', res.data);
            let userArr = []
            res.data.map( (e, i) => {
                return userArr.push({
                    index: i,
                    userId: e.user_id,
                    name: e.user_name,
                    team: e.team,
                    kpi: e.kpi,
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
        console.log(this.state.users);
        return (
            <div>
                {/* { this.props.users.length > 0 && */}
                    <div className="SecondThirdUnranked">
                        <div className="SecondThirdAgents">
                            {/* <div className="SecondPlaceAgent"> */}
                            {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                if(i === 1) {
                                    return <div key={i} className="SecondPlaceAgent">
                                        <img className='prof-pic' src={e.photos} alt=""/>
                                        <h4>2nd place:</h4>
                                        {/* <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                        <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                        <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4> */}
                                    </div>
                                }
                                })}
                            {/* </div> */}
                            {/* <div className="ThirdPlaceAgent"> */}
                            {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                if(i === 2) {
                                    return <div key={i} className="ThirdPlaceAgent">
                                        <img className='prof-pic' src={e.photos} alt=""/>
                                        <h4>3rd place:</h4>
                                        {/* <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                        <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                        <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4> */}
                                    </div>
                                }
                                })}
                            {/* </div> */}
                        </div>
                        <div className="UnrankedAgents">
                            <div className="AVA-unranked-data">
                                <div className="AVA-unranked-ranking">
                                    {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                    if(i > 2 && i < 5) {
                                        return <div key={i} className="AVA-Unranked-lineItem">
                                            <img className='prof-pic' src={e.photos} alt=""/>
                                            <h4>{i + 1}th place</h4>
                                            {/* <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                            <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                            <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4> */}
                                        </div>
                                    }
                                    })}
                                </div>
                            </div>
                            <UsersModal/>
                        </div>
                    </div>
                {/* } */}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { 
        users: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers
  }, dispatch )
  
  export default connect( mapStateToProps, mapDispatchToProps )( SecondThirdUnrankedAgent )