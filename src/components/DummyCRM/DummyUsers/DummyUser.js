import React, { Component } from 'react';
import './DummyUser.css'

import axios from 'axios'

class DummyUser extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      user: '',
      team: '',
      sales: 0,
      dials: 0
    }

    this.handleClickSales = this.handleClickSales.bind( this )
    this.handleClickDials = this.handleClickDials.bind( this )

  }

  componentDidMount() {

    axios.get('/api/users').then(( res ) => {
      console.log(res)
      this.setState({
        // user: res.data,
        // team: res.team.name
      })
    })

  }

  handleClickSales = () => {
    this.setState( prevState => {
       return { sales: prevState.sales + 1 }
    })
  }

  handleClickDials = () => {
    this.setState( prevState => {
       return { dials: prevState.dials + 1 }
    })
  }

  render() {
    return (
      <div className="DummyUser">
        <header>
            <h1>User: { this.state.user }</h1>
            <h2>Team: { this.state.team }</h2>
        </header>
        <span>
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