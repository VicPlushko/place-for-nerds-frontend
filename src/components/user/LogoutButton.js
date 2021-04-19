import React from 'react'

const LogoutButton = (props) => {

    return (
        <button onClick={props.handleLogout}>Logout</button>
    )
}

export default LogoutButton