import React, { Component } from 'react';
import axios from 'axios';
import './DummyUser.css'
import _ from "lodash"

import io from 'socket.io-client';
const socket = io()

class DummyUser extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      sales: 1,
      dials: 1
    }

    this.handleClick = this.handleClick.bind( this )

  }

  componentWillReceiveProps( nextProps ) {
    let standings = _.map(nextProps.standings, "standings")
    let standingsNew = eval( " ( "+standings[0]+" ) " )
    
    let empty = _.isEmpty(standingsNew)
    if( empty ) {
      this.setState({
        dials: 0,
        sales: 0
      })
    } else {
      let personId = this.props.id
      let individualKPI = _.at( standingsNew, personId )
      let dials = _.map( individualKPI, 'dialsKPI' )
      let sales = _.map( individualKPI, 'salesKPI' )
      this.setState({
        dials: dials[0],
        sales: sales[0]
      })
    }
  }

  handleClick = ( propName, value ) => {
    this.setState({
       [propName]: value 
      })
      axios.get( `/api/leaderboard/${this.props.challengeId}` ).then( res => {
        let id = this.props.id;
        let agentScore = {};
        agentScore[id] = { salesKPI: this.state.sales, dialsKPI: this.state.dials }
        let standings = eval("("+res.data[0].standings+")")
        let update = Object.assign( {}, standings, agentScore )
        axios.put( `/api/updateleaderboard/${this.props.challengeId}`, update ).then( res => {
          let roomId = this.props.challengeId
          if ( roomId > 0 ) {
            socket.emit( 'join room', {
              room: roomId
            })
          }
          socket.emit( 'update standings', update )
        })
      })

  }

  render() {
    let { sales, dials } = this.state
    return (
      <div className="DummyUser">
        <header className="DummyTitle">
            <h1>Name: { this.props.name }</h1>
            <h2>Team: { this.props.team }</h2>
        </header>
        <span className="DummyKpis">
            <h3>Current Sales: { this.state.sales }</h3>
            <h3>Current Dials: { this.state.dials }</h3>
        </span>
        <button className='btn-sales-add' onClick={ e => this.handleClick( "sales", sales + 1 ) }>Sales + 1</button>
        <button className='btn-dials-add' onClick={ e => this.handleClick( "dials", dials + 1 ) }>Dials + 1</button>
      </div>
    );
  }
}

export default DummyUser;