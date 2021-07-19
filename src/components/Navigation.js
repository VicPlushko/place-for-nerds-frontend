import React, { Component }from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../components/user/LogoutButton'

class Navigation extends Component {

    render() {

      const {
        isAuthenticated
      } = this.props

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
        width: '50px',
        padding: '10px',
        margin:  '25px 10px',
        background: 'white',
        textDecoration: 'none',
        color: 'black'
    }
    
    const userLinks = {
        padding: '2px',
        margin: '10px 5px',
        textDecoration: 'none',
        color: '#069'
    }
      return (
          <div className='Navbar'>
            <NavLink to='/' exact style={links} activeStyle={{background: 'red'}}>Home</NavLink>
            <NavLink to='/movies' exact style={links} activeStyle={{background: 'red'}}>Movies</  NavLink>
            <NavLink to='/tv_shows' exact style={links} activeStyle={{background: 'red'}}>TV Shows</NavLink>
            {!isAuthenticated ?
              <>          
                <NavLink to='/register' exact style={userLinks}>Sign up</NavLink>
                <NavLink to='/login' exact style={userLinks}>Login</NavLink>
              </>  
                : ""
            }
            
            {isAuthenticated ? <LogoutButton handleLogout={handleLogoutOnButtonClick}/> : ""}
          </div>
    )}
}

const mapStateToProps = globalState => {
  console.log("Nav Props is", globalState.userReducer.isAuthenticated)
  return {
    isAuthenticated: globalState.userReducer.isAuthenticated
  }
} 

export default connect(mapStateToProps)(Navigation) 
