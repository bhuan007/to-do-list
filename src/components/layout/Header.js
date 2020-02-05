import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link className="link" to="/">Home</Link> | <Link className="link" to="/about">About</Link>
        </header>
    )
}

export default Header;