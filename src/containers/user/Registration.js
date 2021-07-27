import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'
import RegistrationForm from '../../components/user/RegistrationForm'

class Signup extends Component {

    handleChangeUsername = (event) => {
        const {changeUsername} = this.props
        changeUsername(event.target.value)
    }

    handleChangeEmail = (event) => {
        const {changeEmail} = this.props
        changeEmail(event.target.value)
    }

    handleChangeEmailConfirm = (event) => {
        const {changeEmailConfirm} = this.props
        changeEmailConfirm(event.target.value)
    }

    handleChangePassword = (event) => {
        const {changePassword} = this.props
        changePassword(event.target.value)
    }

    handleChangePasswordConfirm = (event) => {
        const {changePasswordConfirm} = this.props
        changePasswordConfirm(event.target.value)
    }

    handleOnSubmit = (event) => {

        const {
            username,
            email,
            emailConfirm,
            passwordConfirm,
            password,
            createUser
        } = this.props

        if (username.length === 0) {
            window.alert('Username can not be empty.')
            event.preventDefault()
        } else if (email.length === 0) {
            window.alert('Email can not be empty.')
            event.preventDefault()
        } else if (emailConfirm.length === 0) {
            window.alert('Confirm email can not be empty.')
            event.preventDefault()
        } else if (password === 0) {
            window.alert('Password can not be empty.')
            event.preventDefault()
        } else if (passwordConfirm.length === 0) {
            window.alert('Confirm password can not be empty.')
            event.preventDefault()
        } else {
            const userInfo = {
                username: event.target.elements.username.value,
                email: event.target.elements.email.value,
                password: event.target.elements.passwordField.value,
            }
            event.preventDefault()
            const URL = 'http://localhost:3001/register'
            if (passwordConfirm === password ) {
                fetch(URL, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    createUser(data)
                    this.props.history.push("/login")
                })
            }else {
                alert("Email or passwords do not match")
            }
        }        
    }

    render() {
        return (
            <div>
                <RegistrationForm  handleCreateUser={this.handleOnSubmit} changeUsername={this.handleChangeUsername} changeEmail={this.handleChangeEmail} changeEmailConfirm={this.handleChangeEmailConfirm} changePassword={this.handleChangePassword} changePasswordConfirm={this.handleChangePasswordConfirm} />
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    return {
        username: globalState.userReducer.username,
        email: globalState.userReducer.email,
        emailConfirm: globalState.userReducer.emailConfirm,
        password: globalState.userReducer.password,
        passwordConfirm: globalState.userReducer.passwordConfirm
    }
}

const mapDispatchToProps = dispatch => {
    return {...bindActionCreators(userActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
