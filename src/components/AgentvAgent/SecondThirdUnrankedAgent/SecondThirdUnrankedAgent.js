import React, { Component } from 'react';
import './SecondThirdUnrankedAgent.css'
import { connect } from 'react-redux'
import { fetchAVAData } from './../../../ducks/reducer'


class SecondThirdUnrankedAgent extends Component {
    
    constructor( props ) {
        super( props ) 

        this.state = {

            challengeData: [],
            standings: {
                name: 'Weird Al',
                team: 'Red Team',
                kpiTotal: 16
            }

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
            <div>
                {/* { this.state.standings.length > 0 && */}
                    <div className="SecondThirdUnranked">
                        <div className="SecondThirdAgents">
                            <div className="SecondPlaceAgent">
                                <h2>2nd Place</h2>
                                <img src="{/* http://www.freakingnews.com/pictures/51000/Jack-Black-with-Mouth-Eyes--51345.jpg */}" alt="jack black" />
                                <h2>Jack Black</h2>
                                <h3>Blue Team</h3>
                                <h3>10</h3>
                            </div>
                            <div className="ThirdPlaceAgent">
                                <h2>3rd Place</h2>
                                <img src="{/* https://bloximages.chicago2.vip.townnews.com/siouxcityjournal.com/content/tncms/assets/v3/editorial/2/b5/2b524972-f4e0-5948-958a-769df73c8488/5824ac0ed836c.image.jpg?resize=1200%2C945 */}" alt="Will Forte" />
                                <h2>Will Forte</h2>
                                <h3>Green Team</h3>
                                <h3>8</h3>
                            </div>
                        </div>
                        <div className="UnrankedAgents">
                            <div className="AVA-unranked-data">
                                <div className="AVA-unranked-ranking">
                                    {this.state.challengeData.map( ( e, i ) => {
                                        return <div key={i} className="AVA-Unranked-lineItem">
                                            <img src="" alt=""/>
                                            <h4>4th:</h4>
                                            <h4>Name</h4>
                                            <h4>Team Name</h4>
                                            <h4>KPI Total</h4>
                                        </div>
                                    })}
                                </div>
                            </div>
                            <button>View More</button>
                        </div>
                    </div>
                {/* } */}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { challengeData: state.challengeDataAVA }
  }
  
  export default connect( mapStateToProps, { fetchAVAData } )( SecondThirdUnrankedAgent )