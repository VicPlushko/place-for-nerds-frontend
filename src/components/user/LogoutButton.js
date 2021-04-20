import React from 'react'

const LogoutButton = (props) => {

    return (
        <button className='logout-btn' onClick={props.handleLogout}>Logout</button>
    )
}

export default LogoutButton