import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../actions/user'
import LoginForm from '../../components/user/LoginForm'

class Login extends Component {
    

    handleChangeUsername = (event) => {
        const {changeUsername} = this.props
        changeUsername(event.target.value)
    }

    handleChangePassword = (event) => {
        const {changePassword} = this.props
        changePassword(event.target.value)
    }
    
    handleLoginUser = (event) => {

        const {
            username,
            password,
            startUserLogin,
            userLogin,
            userLoginFail
        } = this.props

        if (username.length === 0) {
            window.alert('Enter your username to continue login.')
            event.preventDefault()
        } else if (password.length === 0) {
            window.alert('Please enter your password to continue login')
            event.preventDefault()
        } else {
            startUserLogin()
            event.preventDefault()
            const loginUrl = 'http://localhost:3001/login'
            let loginBody = {
                username: event.target.elements.username.value,
                password: event.target.elements.passwordField.value
            }
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
                    window.alert('failed to login please try again')
                }else{
                    if (data.jwt !== undefined) {
                        localStorage.setItem("token", data.jwt)
                        userLogin(data)
                        this.props.history.goBack()
                    } else {
                        userLoginFail(alert)
                    }
                }
            })
        }
    };
    
    render() {
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
