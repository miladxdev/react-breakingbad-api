import React, {useState} from 'react'
import logo from "../img/logo.png"

const Header = ( {getQuery, getOffset} ) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q);
        getQuery(q);
        getOffset(0);
    }

    return (
        <header>
            <img className="logo" src={logo} alt="logo" />

            <input 
                type="text"
                name="search" 
                id="search-input"
                placeholder="Heisenberg"
                value={text}
                onChange={(e) => {onChange(e.target.value)}}
            />
        </header>
        
    )
}

export default Header
