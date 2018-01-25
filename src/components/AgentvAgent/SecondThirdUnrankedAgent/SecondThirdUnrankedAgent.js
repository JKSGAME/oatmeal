import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import './SecondThirdUnrankedAgent.css';
import { connect } from 'react-redux';
import { fetchUsers } from './../../../ducks/reducer';

class SecondThirdUnrankedAgent extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                {/* { this.props.users.length > 0 && */}
                    <div className="SecondThirdUnranked">
                        <div className="SecondThirdAgents">
                            <div className="SecondPlaceAgent">
                                <h2>2nd Place</h2>
                                <img src="" alt="" />
                                <h1>{this.props.users.length > 0 && this.props.users[1].name} </h1>
                                <h3>{this.props.users.length > 0 && this.props.users[1].team}</h3>
                                <h4>{this.props.users.length > 0 && this.props.users[1].standings.dialsKPI}</h4>
                            </div>
                            <div className="ThirdPlaceAgent">
                                <h2>3rd Place</h2>
                                <img src="" alt="" />
                                <h1>{this.props.users.length > 0 && this.props.users[2].name} </h1>
                                <h3>{this.props.users.length > 0 && this.props.users[2].team}</h3>
                                <h4>{this.props.users.length > 0 && this.props.users[2].standings.dialsKPI}</h4>
                            </div>
                        </div>
                        <div className="UnrankedAgents">
                            <div className="AVA-unranked-data">
                                <div className="AVA-unranked-ranking">
                                    {this.props.users.map( ( e, i ) => {   // we need to start the map at user 4 and end after 3 iterations.  all users 7+ will be seen onclick of view more. 
                                        return <div key={i} className="AVA-Unranked-lineItem">
                                            <img src="" alt=""/>
                                            <h4>4th:</h4>
                                            <h1>{this.props.users.length > 0 && this.props.users[i].name} </h1>
                                            <h3>{this.props.users.length > 0 && this.props.users[i].team}</h3>
                                            <h4>{this.props.users.length > 0 && this.props.users[i].standings.dialsKPI}</h4>
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
    return { 
        users: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers
  }, dispatch )
  
  export default connect( mapStateToProps, mapDispatchToProps )( SecondThirdUnrankedAgent )