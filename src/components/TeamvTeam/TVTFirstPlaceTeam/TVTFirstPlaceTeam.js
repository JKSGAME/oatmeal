import React, { Component } from 'react';
import './TVTFirstPlaceTeam.css';
import { connect } from 'react-redux'
import { fetchTVTData } from './../../../ducks/reducer'

class TVTFirstPlaceTeam extends Component {

    constructor( props ) {
        super( props ) 

        this.state = {
            challengeData: []
        }
    }

    componentDidMount() {
        this.props.fetchTVTData()
    }

    componentWillReceiveProps( props ) {
        this.setState({
            challengeData: props.challengeData
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="FirstPlaceTeam"> 
            {console.log(this.props.challengeData)}
                <div className="Team-name">
                    <h1>Red Team{/* this.props.challengeData */}</h1>
                </div>
                <div className="Team-data">
                    <div className="FirstPlaceLeftColumn">
                        <h1>kpi name{/* this.props.challengeData */}</h1>
                        <span>kpi total{/* this.props.challengeData */}</span>
                    </div>
                    <div className="FirstPlaceRightColumn">
                        <button className="team1-user-first">
                            <h1>1st Place</h1>
                            <img src='' alt="" />
                            <h1>name{/* this.props.challengeData */}</h1>
                            <h1>kpi total{/* this.props.challengeData */}</h1>
                        </button>
                        <div className="team1-users-twoandthree">
                            <button className="team1-second">
                                <h1>2nd Place</h1>
                                <div className="team1-second-userdata">
                                    <img src='' alt="" />
                                    <div className="team1-second-userInfo">
                                        <h3>name{/* this.props.challengeData */}</h3>
                                        <h4>kpi total{/* this.props.challengeData */}</h4>
                                    </div>
                                </div>
                            </button>
                            <div className="team1-thirdBox">
                                <button className="team1-third">
                                    <h1>3rd Place</h1>
                                    <div className="team1-third-userdata">
                                        <img src='' alt="" />
                                        <div className="team1-third-userInfo">
                                            <h3>name{/* this.props.challengeData */}</h3>
                                            <h4>kpi total{/* this.props.challengeData */}</h4>
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
    return { challengeData: state.challengeDataTVT }
}
  
export default connect( mapStateToProps, { fetchTVTData } )( TVTFirstPlaceTeam )