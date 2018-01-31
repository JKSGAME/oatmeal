import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import './AgentRanking.css';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../ducks/reducer';
import FlipMove from 'react-flip-move'
import axios from 'axios';
import _ from 'lodash';
import { Card, Icon, Image, Header } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import MobileModal from '../../MobileModal/MobileModal';
import ViewMoreModal from '../../ViewMoreModal/ViewMoreModal';


class AgentRanking extends Component {
    constructor() {
        super()
        this.state = {
            sortedUsers: []
        }
    }
    show = dimmer => () => this.setState( { dimmer, open: true } )
    close = () => this.setState( { open: false } )


    componentWillReceiveProps( nextProps ) {
        axios.get( `/api/viewmore/${this.props.challengeId}`,  ).then( res => {
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
            let orderedUsers = () => {
                let arr = []
                if ( userArr[0].kpi === 'Dials' ) {
                    return arr = _.orderBy( userArr, ['standings.dialsKPI'], ['desc'] )
                }
                else if ( userArr[0].kpi === 'Sales' ) {
                    return arr = _.orderBy( userArr, ['standings.salesKPI'], ['desc'] )
                }
                return arr
            }
            // console.log('ordered', orderedUsers());
            this.setState({
                sortedUsers: orderedUsers(),
                info: res.data
            })

        })
    }

    render() {
        let { sortedUsers } = this.state
        // console.log(sortedUsers[0].standings[0] && sortedUsers[0].kpi === 'Sales');
        console.log(this.state.sortedUsers);
        let dynamicKPI = (i) => {
             if ( sortedUsers[0].standings[0] && sortedUsers[0].kpi === 'Sales') {
                return sortedUsers[i].standings[0].salesKPI
            }
            else if (sortedUsers[0].standings[0] && sortedUsers[0].kpi === 'Dials') {
                    return sortedUsers[i].standings[0].dialsKPI
                }
        }
        return (
            <div>
        {/* {console.log('sorted', this.state.sortedUsers[0].kpi)} */}

            <div className='AVA-FirstPlaceAgent'>
            <FlipMove>
                {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                    if ( i === 0 ) {
                        return <Card key={e.userId} className='AVA-first-place-agent'>
                            <Header as='h1'>1st Place</Header>

                            <Image className='first-place-img' centered size='small' src={e.photos} />
                            <Card.Content>
                                <Card.Header>{e.name}</Card.Header>
                                <Card.Description>
                                    <p>Team: {e.team}</p>
                                    {e.kpi}: {dynamicKPI(i)}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    }
                })}
                </FlipMove>
            </div>
            

            <div >
                {/* { this.props.users.length > 0 && */}
                <div className="SecondThirdUnranked">
                    <div className="SecondThirdAgents">
                        <div className="SecondPlaceAgent">
                        <FlipMove>
                        {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                            if ( i === 1 ) {
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
                                                {e.kpi}: {dynamicKPI(i)}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </div>
                            }
                        })}
                        </FlipMove>
                        </div>
                        <div className="ThirdPlaceAgent">
                        <FlipMove>
                        {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                            if ( i === 2 ) {
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
                                                {e.kpi}: {dynamicKPI(i)}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </div>
                            }
                        })}
                        </FlipMove>
                        </div>
                    </div>
                    <div className="UnrankedAgents">
                        <div className="AVA-unranked-data">
                            <div className="AVA-unranked-ranking">
                            <FlipMove>
                                {this.state.sortedUsers.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                    if ( i > 2 && i < 6 ) {
                                        // return <div key={i} className="AVA-Unranked-lineItem">
                                        //     <img className='prof-pic' src={e.photos} alt=""/>
                                        //     <h4>{i + 1}th place</h4>
                                        //     <h1>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].name} </h1>
                                        //     <h3>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].team}</h3>
                                        //     <h4>{this.state.sortedUsers.length > 0 && this.state.sortedUsers[i].standings.salesKPI}</h4>
                                        // </div>
                                        return <div key={e.userId} className="AVA-Unranked-lineItem">
                                            <Card >
                                                <Card.Content>
                                                    <Header as='h6'>{i + 1}th Place</Header>
                                                    <Card.Description>
                                                        <h6 className='h6-name'>{e.name}</h6>
                                                        {e.kpi}: {dynamicKPI(i)}
                                                    </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        </div>
                                    }
                                })}
                            </FlipMove>
                            </div>
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

function mapStateToProps( state ) {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers,
}, dispatch )

export default connect( mapStateToProps, mapDispatchToProps )( AgentRanking )