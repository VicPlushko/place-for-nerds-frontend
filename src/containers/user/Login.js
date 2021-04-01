import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {changeUsername, changePassword as loginActions} from '../../actions/user'

export class Login extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    return {
        username: globalState.userReducer.username,
        password: globalState.userReducer.password
    }
}

const mapDispatchToProps = dispatch => {
    return {...bindActionCreators(loginActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login) 
