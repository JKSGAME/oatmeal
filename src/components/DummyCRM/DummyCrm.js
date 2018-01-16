import React, { Component } from 'react';
import './DummyCrm.css'
import DummyUser from './DummyUsers/DummyUser.js'

class DummyCrm extends Component {
  render() {
    return (
      <div className="DummyCrm">
        <header>
          <h1>Dummy CRM</h1>
        </header>
        <div className='dummy-user-layout'>
          <div className='dummy-top-row'>
            <DummyUser/>
            <DummyUser/>
            <DummyUser/>
          </div>
          <div className='dummy-bottom-row'>
            <DummyUser/>
            <DummyUser/>
            <DummyUser/>
          </div>
        </div>
      </div>
    );
  }
}

export default DummyCrm;