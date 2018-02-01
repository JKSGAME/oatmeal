import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './AgentRanking.css';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../ducks/reducer';
import axios from 'axios';
import _ from 'lodash';
import FlipMove from 'react-flip-move';
import { Image } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import MobileModal from '../../MobileModal/MobileModal';
import ViewMoreModal from '../../ViewMoreModal/ViewMoreModal';



class AgentRanking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortedUsers: [],
            info: []
        }
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        axios.get(`/api/viewmore/${nextProps.challengeId}`).then(res => {
            let userArr = []
            res.data.map((e, i) => {
                return userArr.push({
                    index: i,
                    userId: e.user_id,
                    name: e.user_name,
                    team: e.team,
                    kpi: e.kpi,
                    photos: e.photos,
                    standings: _.at(nextProps.standings, e.user_id),
                    chalid: e.challenge_id
                })
            })
            let orderedUsers = () => {
                let arr = []
                if (userArr[0].kpi === 'Sales') {
                    return arr = _.orderBy(userArr, ['standings[0].salesKPI'], ['desc'])
                }
                else if (userArr[0].kpi === 'Dials') {
                    return arr = _.orderBy(userArr, ['standings[0].dialsKPI'], ['desc'])
                }
                console.log('arr', arr);
                return arr
            }

            this.setState({
                sortedUsers: orderedUsers(),
                info: res.data
            })
        })
    }
    render() {
        let { sortedUsers, info } = this.state
        let dynamicKPI = (i) => {
            if (sortedUsers[0].standings[0] && sortedUsers[0].kpi === 'Sales') {
                return sortedUsers[i].standings[0].salesKPI
            }
            else if (sortedUsers[0].standings[0] && sortedUsers[0].kpi === 'Dials') {
                return sortedUsers[i].standings[0].dialsKPI
            }
        }
        let dynamicName = () => sortedUsers[0] && this.props.challengeId === sortedUsers[0].chalid ? <h2>{info[0].name}</h2> : <h2>No Challenges Here</h2>
        let dynamicDesc = () => sortedUsers[0] && this.props.challengeId === sortedUsers[0].chalid ? <p>{info[0].description}</p> : <p>No Desc Here</p>
        return (
            <div className="agent-ranking">
                <div className="AVA-title">
                    {dynamicName()}
                    {dynamicDesc()}
                </div>
                {/* <div className='AVA-FirstPlaceAgent'> */}
                    <FlipMove>
                        {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                            if (i === 0) {
                                return <div key={e.userId} className='AVA-first-place-agent'>
                                    <div className="first-place-left">
                                        <h1 as='h1'>1st Place</h1>
                                        <img className='first-place-img' centered size='small' src={e.photos} />
                                    </div>
                                    <div className="first-place-right">
                                        <h2>{e.name}</h2>
                                        <div>
                                            <h3>Team: {e.team}</h3>
                                            {e.kpi}: {dynamicKPI(i)}
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </FlipMove>
                {/* </div> */}
                
                    {/* { this.props.users.length > 0 && */}
                    <div className="SecondThirdUnranked">
                        <div className="SecondThirdAgents">
                            {/* <div className="SecondPlaceAgent"> */}
                                <FlipMove>
                                    {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                        if (i === 1) {
                                            return <div className="SecondPlaceAgent" key={e.userId} >
                                                    <h4 as='h4'>2nd Place</h4>
                                                    <Image size='small' src={e.photos} />
                                                    <div>
                                                        <div>{e.name}</div>
                                                        <div><p>Team: {e.team}</p>
                                                            {e.kpi}: {dynamicKPI(i)}
                                                        </div>
                                                    </div>
                                                </div>
                                            // </div>
                                        }
                                    })}
                                </FlipMove>
                            {/* </div> */}
                            {/* <div className="ThirdPlaceAgent"> */}
                                <FlipMove>
                                    {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                        if (i === 2) {
                                             return <div className='ThirdPlaceAgent'  key={e.userId}>
                                                    <div as='h4'>3rd Place</div>
                                                    <Image size='small' src={e.photos} />
                                                    <div>
                                                        <div>{e.name}</div>
                                                        <div><p>Team: {e.team}</p>
                                                            {e.kpi}: {dynamicKPI(i)}</div>
                                                    </div>
                                                </div>
                                            // </div>
                                        }
                                    })}
                                </FlipMove>
                            {/* </div> */}
                        </div>
                        <div className="UnrankedAgents">
                            <div className="AVA-unranked-data">
                                <div className="AVA-unranked-ranking">
                                    <FlipMove>
                                        {this.state.sortedUsers.map((e, i) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                            if (i > 2 && i < 6) {
                                                return <div key={e.userId} className="AVA-unranked-agent-info">
                                                            <div as='h6'>{i + 1}th Place</div>
                                                            <div>
                                                                <h6 className='h6-name'>{e.name}</h6>
                                                                {e.kpi}: {dynamicKPI(i)}
                                                            </div>
                                                        </div>
                                           }
                                        })}
                                    </FlipMove>
                                </div>
                                <MediaQuery query=" ( max-width: 425px) ">
                                    <MobileModal />
                                </MediaQuery>
                                <MediaQuery query=" ( min-width: 426px) ">
                                    <ViewMoreModal />
                                </MediaQuery>
                            </div>
                        </div>
                        {/* } */}
                    </div>
                </div>
          
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(AgentRanking)
