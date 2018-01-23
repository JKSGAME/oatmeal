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
                <div className="Team-name">
                    <h1>Blue Team{/* this.props.challengeData */}</h1>
                </div>
                <div className="Team-data-2">
                    <div className="SecondPlaceLeftColumn">
                        <h1>kpi name{/* this.props.challengeData */}</h1>
                        <span>kpi total{/* this.props.challengeData */}</span>
                    </div>
                    <div className="SecondPlaceRightColumn">
                        <div className="team2-leaders">
                            {this.state.challengeData.map( ( e, i ) => {
                                return <div key={i} className="TVT-team2-leaders">
                                    <img src="" alt=""/>
                                    <h4>Name</h4>
                                    <h4>Team Name</h4>
                                    <h4>KPI Total</h4>
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
    return { challengeData: state.challengeDataTVT }
}
  
export default connect( mapStateToProps, { fetchTVTData } )( TVTSecondPlaceTeam )