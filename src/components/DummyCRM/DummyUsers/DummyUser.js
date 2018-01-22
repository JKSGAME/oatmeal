import React, { Component } from 'react';
import './DummyUser.css'

class DummyUser extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      sales: 0,
      dials: 0
    }

    this.handleClickSales = this.handleClickSales.bind( this )
    this.handleClickDials = this.handleClickDials.bind( this )

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
      console.log(this.state.dials)
  }

  render() {

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