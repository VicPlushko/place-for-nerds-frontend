import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../actions/user'
import LoginForm from '../../components/user/LoginForm'

class Login extends Component {
    

    handleChangeUsername = (event) => {
        const {changeUsername} = this.props
        console.log('login username is', event.target.value)
        changeUsername(event.target.value)
    }

    handleChangePassword = (event) => {
        const {changePassword} = this.props
        console.log('login password is', event.target.value)
        changePassword(event.target.value)
    }
    
    handleLoginUser = (event) => {

        const {
            startUserLogin,
            userLogin,
            userLoginFail
        } = this.props

        startUserLogin()
        event.preventDefault()
        const loginUrl = 'http://localhost:3001/login'
        let loginBody = {
            username: event.target.elements.username.value,
            password: event.target.elements.passwordField.value
        }
        console.log("login details", loginBody)
        fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(loginBody)
        })
        .then(resp => resp.json())
        .then(data =>  {
            console.log(data)
            if (data.failure !== undefined) {
                console.log("failed to login: ", data)
            }else{
                if (data.jwt !== undefined) {
                    console.log("jwt exists: ", data)
                    localStorage.setItem("token", data.jwt)
                    userLogin(data)
                    this.props.history.goBack()
                } else {
                    console.log("failed to login: ", data)
                    userLoginFail(alert)
                }
            }
        })
    };
    
    render() {
        console.log("login state is", this.props)
        return (
            <div>
                <LoginForm handleSubmit={this.handleLoginUser} changeUsername={this.handleChangeUsername} changePassword={this.handleChangePassword} />
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    return {
        username: globalState.userReducer.username,
        password: globalState.userReducer.password,
        isAuthenticated: globalState.userReducer.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {...bindActionCreators(loginActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login) 
