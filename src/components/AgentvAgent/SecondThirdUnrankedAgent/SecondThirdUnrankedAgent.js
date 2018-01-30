import React, { Component } from 'react';
import './SecondThirdUnrankedAgent.css'
import ViewMoreModal from '../../ViewMoreModal/ViewMoreModal'
import { connect } from 'react-redux'
import { fetchAVAData } from './../../../ducks/reducer'
import { bindActionCreators } from 'redux';
import { fetchUsers } from './../../../ducks/reducer';
import _ from 'lodash';
import axios from 'axios'
import { Card, Icon, Image, Header } from 'semantic-ui-react'
import MobileModal from '../../MobileModal/MobileModal';

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
            // console.log('res.data', res.data);
            let userArr = []
            res.data.map((e, i) => {
                // let standingsObj = eval('(' + e.standings + ')')
                let standingsObj = JSON.parse(e.standings)
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
            let orderedUsers = _.orderBy(userArr, ['standings.dialsKPI'], ['desc'])
            this.setState({
                sortedUsers: orderedUsers
            })
        })
    }

    render() {
        // console.log(this.state.users);
        return (
            <div>
                {/* { this.props.users.length > 0 && */}
                <div className="SecondThirdUnranked">
                    <div className="SecondThirdAgents">
                        {/* <div className="SecondPlaceAgent"> */}
                        {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                            if (i === 1) {
                                // return <div key={i} className="SecondPlaceAgent">
                                //     <img className='prof-pic' src={e.photos} alt=""/>
                                //     <h4>2nd place:</h4>
                                //     <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                //     <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                //     <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4>
                                // </div>
                                return <div className='SecondPlaceAgent' key={e.userId}>
                                    <Card >
                                        <Header as='h4'>2nd Place</Header>
                                        <Image size='small' src={e.photos} />
                                        <Card.Content>
                                            <Card.Header>{e.name}</Card.Header>
                                            <Card.Description><p>Team: {e.team}</p>
                                                {/* change to dials later */}
                                                {e.kpi}: {e.standings.dialsKPI}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </div>
                            }
                        })}
                        {/* </div> */}
                        {/* <div className="ThirdPlaceAgent"> */}
                        {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                            if (i === 2) {
                                // return <div key={i} className="ThirdPlaceAgent">
                                //     <img className='prof-pic' src={e.photos} alt=""/>
                                //     <h4>3rd place:</h4>
                                //     <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                //     <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                //     <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4>
                                // </div>
                                return <div className='SecondPlaceAgent' key={e.userId}>
                                    <Card  >
                                        <Header as='h4'>3rd Place</Header>
                                        <Image size='small' src={e.photos} />
                                        <Card.Content>
                                            <Card.Header>{e.name}</Card.Header>
                                            <Card.Description><p>Team: {e.team}</p>
                                                {/* change to dials later */}
                                                {e.kpi}: {e.standings.dialsKPI}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </div>
                            }
                        })}
                        {/* </div> */}
                    </div>
                    <div className="UnrankedAgents">
                        <div className="AVA-unranked-data">
                            <div className="AVA-unranked-ranking">
                                {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                    if (i > 2 && i < 6) {
                                        // return <div key={i} className="AVA-Unranked-lineItem">
                                        //     <img className='prof-pic' src={e.photos} alt=""/>
                                        //     <h4>{i + 1}th place</h4>
                                        //     <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                        //     <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                        //     <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4>
                                        // </div>
                                        return <div className="AVA-Unranked-lineItem">
                                            <Card key={e.userId}>
                                                <Card.Content>
                                                    <Header as='h6'>{i + 1}th Place</Header>
                                                    <Card.Description>
                                                        <h6 className='h6-name'>{e.name}</h6>
                                                        {/* change to dials later */}
                                                        {e.kpi}: {e.standings.dialsKPI}</Card.Description>
                                                </Card.Content>
                                            </Card>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                        <ViewMoreModal />
                        <MobileModal/>
                    </div>
                </div>
                {/* } */}
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