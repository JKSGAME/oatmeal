import React, { Component } from 'react'
import bowl from './../../assets/Logomakr_3mQyLR.png'
import "./Header.css"

class Header extends Component {
    render(){
        return(
            <div className= "logo-flex">
                <img className="logo" src={bowl}/>
                <h1 className="brandname">Oatmeal</h1>
            </div>
        )
    }
}

export default Header;