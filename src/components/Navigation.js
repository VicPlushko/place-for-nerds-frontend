import React, { useState }from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../components/user/LogoutButton'

const Navigation = () => {
    
    const [isAuthenticated] = useState(localStorage.getItem('token') ? true : false)

    const handleLogoutOnButtonClick = (event) => {
        console.log(event.target)
        if (isAuthenticated === true) {
          localStorage.removeItem('token')
          window.location.reload()
        } else {
          window.alert("You need to be logged in to logout")
        }
      }
    
    const links = {
        width: '100px',
        padding: '15px',
        margin:  '25px 10px',
        background: 'white',
        textDecoration: 'none',
        color: 'black'
    }
    
    const userLinks = {
        padding: '2px',
        margin: '10px 5px'
    }

    return (
        <div>
           <NavLink to='/' exact style={links} activeStyle={{background: 'red'}}>Home</NavLink>
           <NavLink to='/movies' exact style={links} activeStyle={{background: 'red'}}>Movies</NavLink>
           <NavLink to='/tv_shows' exact style={links} activeStyle={{background: 'red'}}>TV Shows</NavLink>
           <NavLink to='/register' exact style={userLinks}>Sign up</NavLink>
           <NavLink to='/login' exact style={userLinks}>Login</NavLink>
           <LogoutButton handleLogout={handleLogoutOnButtonClick}/>
           
        </div>
    )
}

export default Navigation
