import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './TVTSecondPlaceTeam.css';
import { connect } from 'react-redux';
import { fetchTVTData, fetchUsers } from './../../../ducks/reducer';

class TVTSecondPlaceTeam extends Component {

    componentDidMount() {
        this.props.fetchTVTData()
    }

    render() {
        return (
            <div className="SecondPlaceTeam">
                <div className="Team-name">
                    <h1>Blue Team{/* this.props.challengeData */}</h1>
                </div>
                <div className="Team-data-2">
                    <div className="SecondPlaceLeftColumn">
                        <h1>{this.props.challengeData.length > 0 && this.props.challengeData[0].kpi}</h1>  {/* needs to filter with challenge data it should load */}
                        <span>{this.props.users.length > 0 && this.props.users[0].dialsKPI}</span>         {/* needs to add all user kpi data together and filter kpi based on challenge */}
                    </div>
                    <div className="SecondPlaceRightColumn">
                        <div className="team2-leaders">
                            {this.props.users.map( ( e, i ) => {
                                return <div key={i} className="TVT-team2-leaders">
                                    <img src="" alt=""/>
                                    <h1>{this.props.users.length > 0 && this.props.users[0].name} </h1>
                                    <h3>{this.props.users.length > 0 && this.props.users[0].team}</h3>
                                    <h4>{this.props.users.length > 0 && this.props.users[0].standings.dialsKPI}</h4>
                                </div>
                            })}
                        </div>
                        <button>View More</button>
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

export default connect( mapStateToProps, mapDispatchToProps )( TVTSecondPlaceTeam )