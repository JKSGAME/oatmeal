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

    this.handleClickSales = this.handleClickSales.bind( this )
    this.handleClickDials = this.handleClickDials.bind( this )

  }

  componentWillReceiveProps( nextProps ) {
    console.log(nextProps.standings[0])
    let standings = _.map(nextProps.standings, "standings")
    let standingsNew = eval( " ( "+standings[0]+" ) " )
    console.log(standingsNew)
    
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

  handleClickSales = () => {
    this.setState( prevState => {
       return { sales: prevState.sales + 1 }
    })
    axios.get( `/api/leaderboard/${this.props.challengeId}`).then( res => {
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
    
    
        // io.to(this.props.challengeId).emit( 'update standings', update )
      })
    })
  }

  handleClickDials = () => {
    this.setState( prevState => {
       return { dials: prevState.dials + 1 }
    })
    axios.get( `/api/leaderboard/${this.props.challengeId}`).then( res => {
      let id = this.props.id;
      let agentScore = {};
      agentScore[id] = { salesKPI: this.state.sales, dialsKPI: this.state.dials }
      let standings = eval("("+res.data[0].standings+")")
      let update = Object.assign( {}, standings, agentScore )
      axios.put( `/api/updateleaderboard/${this.props.challengeId}`, update ).then( res => {
        // io.to(this.props.challengeId).emit( 'update standings', update )
      })
    })
  }

  render() {
    console.log(this.state.sales)
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
        <button className='btn-sales-add' onClick={ e => this.handleClickSales( e ) }>Sales + 1</button>
        <button className='btn-dials-add' onClick={ e => this.handleClickDials( e ) }>Dials + 1</button>
      </div>
    );
  }
}

export default DummyUser;