import React, { Component } from 'react';
import './TVTSecondPlaceTeam.css';
import { connect } from 'react-redux'
import { fetchTVTData } from './../../../ducks/reducer'

class TVTSecondPlaceTeam extends Component {

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
            <div className="SecondPlaceTeam">
                <h1>team name{this.props.challengeData}</h1>
                <div className="Team-data-2">
                    <div className="SecondPlaceLeftColumn">
                        <h1>kpi name{this.props.challengeData}</h1>
                        <span>kpi total{this.props.challengeData}</span>
                    </div>
                    <div className="SecondPlaceRightColumn">
                        <div className="team2-leaders">
                            <div className="team2-ranking-text">
                                <h4>1st</h4>
                                <h4>2nd</h4>
                                <h4>3rd</h4>
                            </div>
                            <button className="team2-reanking-data"> {/* map over users and provide this info */}
                                <img src={this.props.challengeData} alt=""/>
                                <h4>name{this.props.challengeData}</h4>
                                <span>kpi total{this.props.challengeData}</span>
                            </button>
                        </div>
                        <button>View More</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { challengeData: state.challengeDataTVT }
}
  
export default connect( mapStateToProps, { fetchTVTData } )( TVTSecondPlaceTeam )