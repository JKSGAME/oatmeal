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
      dials: 1, 
    }

    this.handleClickSales = this.handleClickSales.bind( this )
    this.handleClickDials = this.handleClickDials.bind( this )

  }

  componentWillReceiveProps( nextProps ) {
    let standings = _.map(this.props.standings, "standings")
    // console.log(standings);
    let standingsNew = eval( " ( "+standings[0]+" ) " )
    // console.log(standingsNew, "this.is the standings obj")
    if( standingsNew !== {} ) {
      let person = this.props.id;
      for ( person in standingsNew){
        let individual = standingsNew[person]
        console.log( individual)
        // this.setState({
        //   sales: _.map(individual, 0),
        // })
        // console.log(this.state.sales)

        // for (dialsKPI in individual){
        //   this.setState({
        //     dials: 'dialsKPI'
        // })}
      }
     }
  }

  handleClickSales = () => {
    this.setState( prevState => {
       return { sales: prevState.sales + 1 }
    })
    let id = this.props.id;
    let agentScore = {};
    agentScore[id] = { salesKPI: this.state.sales, dialsKPI: this.state.dials }

    axios.get( '/api/leaderboard' ).then( standingsRes => {
      let standings = eval("("+standingsRes.data[0].standings+")")
      let update = Object.assign( {}, standings, agentScore )

      axios.put( '/api/leaderboard/', update ).then( res => {
        socket.emit( 'update standings', update )
      })
    })
  }

  handleClickDials = () => {
    this.setState( prevState => {
       return { dials: prevState.dials + 1 }
      })

      let id = this.props.id;
      let agentScore = {};
      agentScore[id] = { salesKPI: this.state.sales, dialsKPI: this.state.dials }
  
      axios.get('/api/leaderboard').then( standingsRes => {
        let standings = eval( " ( "+standingsRes.data[0].standings+" ) " )
        let update = Object.assign( {}, standings, agentScore )
        console.log( update, "update standings" )
        axios.put( '/api/leaderboard/', update ).then( res => {
          io.to( this.props.challengeId ).emit( 'update standings', update )
        })
      })
  }

  render() {
    // console.log(this.state)
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