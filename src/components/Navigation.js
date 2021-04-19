import React from 'react'
import { NavLink } from 'react-router-dom'

const links = {
    width: '100px',
    padding: '15px',
    margin:  '25px 10px',
    background: 'white',
    textDecoration: 'none',
    color: 'black'
}

const userLinks = {
    padding: '5px',
    margin: '10px 5px'
}

const Navigation = (props) => {
    return (
        <div>
           <NavLink to='/' exact style={links} activeStyle={{background: 'red'}}>Home</NavLink>
           <NavLink to='/movies' exact style={links} activeStyle={{background: 'red'}}>Movies</NavLink>
           <NavLink to='/tv_shows' exact style={links} activeStyle={{background: 'red'}}>TV Shows</NavLink>
           <NavLink to='/register' exact style={userLinks}>Sign up</NavLink>
           <NavLink to='/login' exact style={userLinks}>Login</NavLink>
        </div>
    )
}

export default Navigation
