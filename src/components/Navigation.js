import React from 'react'
import { NavLink } from 'react-router-dom'

const links = {
    width: '100px',
    padding: '15px',
    margin:  '10px 10px',
    background: 'white',
    textDecoration: 'none',
    color: 'black'
}

const Navigation = () => {
    return (
        <div>
           <NavLink to='/' exact style={links} activeStyle={{background: 'red'}}>Home</NavLink>
           <NavLink to='/movies' exact style={links} activeStyle={{background: 'red'}}>Movies</NavLink>
        </div>
    )
}

export default Navigation
