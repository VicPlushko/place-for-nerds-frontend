import React from 'react'

const LogoutButton = (props) => {

    const {handleLogout} = props

    return (
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
    )
}

export default LogoutButton