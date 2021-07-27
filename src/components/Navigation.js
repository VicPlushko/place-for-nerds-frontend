import React, { Component }from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../components/user/LogoutButton'

class Navigation extends Component {

    render() {

      const {
        isAuthenticated
      } = this.props

      const handleLogoutOnButtonClick = () => {
        if (isAuthenticated === true) {
          localStorage.removeItem('token')
          window.location.reload()
        } else {
          window.alert('You need to be logged in to logout')
        }
      }
    
    const links = {
        width: '50px',
        padding: '5px',
        margin:  '25px 5px',
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
          <div className='NavBar'>
              <div className='title'>
                <h1>Place For Nerds</h1>
              </div>
                <div className='nav-links'>
                  <NavLink to='/' exact style={links} activeStyle={{background: 'red'}}>Home</NavLink>
                  <NavLink to='/movies' exact style={links} activeStyle={{background: 'red'}}>Movies</  NavLink>
                  <NavLink to='/tv_shows' exact style={links} activeStyle={{background: 'red'}}>TV Shows</NavLink>
                </div>
            <div className='user-links'>
              {!isAuthenticated ?
              <>          
                <NavLink to='/register' exact style={userLinks}>Sign up</NavLink>
                <NavLink to='/login' exact style={userLinks}>Login</NavLink>
              </>  
                : ''
              }
            
              {isAuthenticated ? 
                <LogoutButton handleLogout={handleLogoutOnButtonClick}/> 
                : ''
              }
            </div>
          </div>
    )}
}

const mapStateToProps = globalState => {
  console.log('username is', globalState)
  return {
    isAuthenticated: globalState.userReducer.isAuthenticated
  }
} 

export default connect(mapStateToProps)(Navigation) 
