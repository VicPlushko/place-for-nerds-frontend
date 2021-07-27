import React, { Component } from 'react'
import { connect } from 'react-redux'

class Footer extends Component {

    render() {

        const{
            isAuthenticated,
            username
        } = this.props

        return (
            <div className='footer'>
                <div className='signed-in-as'>
                    {isAuthenticated ? `Welcome back ${username}` : null}
                </div>
            </div>
        )
    }
}

 const mapStateToProps = globalState => {
    return {
        isAuthenticated: globalState.userReducer.isAuthenticated,
        username: globalState.userReducer.username
    }
}
export default connect(mapStateToProps)(Footer)
