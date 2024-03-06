import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navigation = () => {
    const location = useLocation();
    
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    };


    return (
        <nav>
            <ul>
                <li><NavLink to="/" style={location.pathname === '/' ? activeStyle : null}>Home</NavLink></li>
                <li><NavLink to="/about" style={location.pathname === '/about' ? activeStyle : null}>About</NavLink></li>
                <li><NavLink to="/contacts" style={location.pathname === '/contacts' ? activeStyle : null}>Contacts</NavLink></li>
            </ul>
        </nav>
    )
}

    export default Navigation;












