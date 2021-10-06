import React, {useState} from 'react'
import logoUrl from "../img/logo.png"


const Header = ( {getQuery, getOffset} ) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q);
        getQuery(q);
        getOffset(0);
    }

    return (
        <header>
            <div className="page-wrapper">
                <img className="logo" 
                    src={logoUrl} 
                    alt="logo" 
                />

                <input 
                    type="text"
                    name="search" 
                    id="search-input"
                    placeholder="Say my name..."
                    value={text}
                    onChange={(e) => {onChange(e.target.value)}}
                />
            </div>
        </header>
    )
}

export default Header
