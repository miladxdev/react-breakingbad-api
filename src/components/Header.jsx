import React from 'react'
import logo from "../img/logo.png"

const Header = () => {
    return (
        <header>
            <img className="logo" src={logo} alt="logo" />
            <input type="text" name="search" id="search-input" placeholder="Heisenberg" />
        </header>
        
    )
}

export default Header
