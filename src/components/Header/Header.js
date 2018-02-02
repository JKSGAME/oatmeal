import React, { Component } from 'react'
import bowl from './../../assets/Logomakr_3mQyLR.png'

class Header extends Component {
    render(){
        return(
            <div>
                <img className="logo" src={bowl}/>
                <h1>Oatmeal</h1>
            </div>
        )
    }
}

export default Header;