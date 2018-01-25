import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './TVTFirstPlaceTeam.css';
import { connect } from 'react-redux';
import { fetchTVTData, fetchUsers } from './../../../ducks/reducer';

class TVTFirstPlaceTeam extends Component {

    componentDidMount() {
        this.props.fetchTVTData()
    }

    render() {
        return (
            <div className="FirstPlaceTeam"> 
                <div className="Team-name">
                    <h1>Red Team{/* this.props.challengeData */}</h1>
                </div>
                <div className="Team-data">
                    <div className="FirstPlaceLeftColumn">
                        <h1>{this.props.challengeData.length > 0 && this.props.challengeData[0].kpi}</h1>  {/* needs to filter with challenge data it should load */}
                        <span>{this.props.users.length > 0 && this.props.users[0].dialsKPI}</span>         {/* needs to add all user kpi data together and filter kpi based on challenge */}
                    </div>
                    <div className="FirstPlaceRightColumn">
                        <button className="team1-user-first">
                            <h1>1st Place</h1>
                            <img src='' alt="" />
                            <h1>{this.props.users.length > 0 && this.props.users[0].name}</h1>
                            <h1>{this.props.users.length > 0 && this.props.users[0].dialsKPI}</h1>
                        </button>
                        <div className="team1-users-twoandthree">
                            <button className="team1-second">
                                <h1>2nd Place</h1>
                                <div className="team1-second-userdata">
                                    <img src='' alt="" />
                                    <div className="team1-second-userInfo">
                                        <h3>{this.props.users.length > 0 && this.props.users[1].name}</h3>
                                        <h4>{this.props.users.length > 0 && this.props.users[1].dialsKPI}</h4>
                                    </div>
                                </div>
                            </button>
                            <div className="team1-thirdBox">
                                <button className="team1-third">
                                    <h1>3rd Place</h1>
                                    <div className="team1-third-userdata">
                                        <img src='' alt="" />
                                        <div className="team1-third-userInfo">
                                            <h3>{this.props.users.length > 0 && this.props.users[2].name}</h3>
                                            <h4>{this.props.users.length > 0 && this.props.users[2].dialsKPI}</h4>
                                        </div>
                                    </div>
                                </button>
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { 
        challengeData: state.challengeDataTVT,
        users: state.users 
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTVTData,
    fetchUsers
}, dispatch )
  
export default connect( mapStateToProps, mapDispatchToProps )( TVTFirstPlaceTeam )