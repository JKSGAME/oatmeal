import React, { Component } from 'react';
import './SecondThirdUnrankedAgent.css'
import { connect } from 'react-redux'
import { fetchAVAData } from './../../../ducks/reducer'


class SecondThirdUnrankedAgent extends Component {
    
    constructor( props ) {
        super( props ) 

        this.state = {

            challengeData: []

        }
    }

    componentDidMount() {
        this.props.fetchAVAData()
    }

    componentWillReceiveProps( props ) {
        this.setState({
            challengeData: props.challengeData
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="SecondThirdUnranked">
                <div className="SecondThirdAgents">
                    <div className="SecondPlaceAgent">
                        <img src="" alt="" />
                        <h2>name</h2>
                        <h3>kpi</h3>
                    </div>
                    <div className="ThirdPlaceAgent">
                        <img src="" alt="" />
                        <h2>name</h2>
                        <h3>kpi</h3>
                    </div>
                </div>
                <div className="UnrankedAgents">
                    <div className="AVA-unranked-data">
                        <div className="AVA-unranked-ranking">
                            <h4>4th</h4>
                            <h4>5th</h4>
                            <h4>6th</h4>
                            <h4>7th</h4>
                            <h4>8th</h4>
                        </div>
                        <div className="AVA-unranked-agent-info">
                            <img src="" alt="" />
                            <h4>name</h4>
                            <h4>kpi total</h4>
                        </div>
                    </div>
                    <button>View More</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { challengeData: state.challengeDataAVA }
  }
  
  export default connect( mapStateToProps, { fetchAVAData } )( SecondThirdUnrankedAgent )