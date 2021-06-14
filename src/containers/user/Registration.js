import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'
import RegistrationForm from '../../components/user/RegistrationForm'
// import { Redirect } from 'react-router-dom'

class Signup extends Component {

    handleChangeUsername = (event) => {
        const {changeUsername} = this.props
        console.log("username is", event.target.value)
        changeUsername(event.target.value)
    }

    handleChangeEmail = (event) => {
        const {changeEmail} = this.props
        console.log("email is", event.target.value)
        changeEmail(event.target.value)
    }

    handleChangeEmailConfirm = (event) => {
        const {changeEmailConfirm} = this.props
        console.log("email confirm is", event.target.value)
        changeEmailConfirm(event.target.value)
    }

    handleChangePassword = (event) => {
        const {changePassword} = this.props
        console.log("password is", event.target.value)
        changePassword(event.target.value)
    }

    handleChangePasswordConfirm = (event) => {
        const {changePasswordConfirm} = this.props
        console.log("password confirm is", event.target.value)
        changePasswordConfirm(event.target.value)
    }

    handleOnSubmit = (event) => {

        const {
            passwordConfirm,
            password,
            createUser
        } = this.props

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

    render() {
        return (
            <div>
                <RegistrationForm  handleCreateUser={this.handleOnSubmit} changeUsername={this.handleChangeUsername} changeEmail={this.handleChangeEmail} changeEmailConfirm={this.handleChangeEmailConfirm} changePassword={this.handleChangePassword} changePasswordConfirm={this.handleChangePasswordConfirm} />
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    console.log("global state is", globalState)
    return {
        username: globalState.userReducer.username,
        email: globalState.userReducer.email,
        emailComfirm: globalState.userReducer.emailComfirm,
        password: globalState.userReducer.password,
        passwordConfirm: globalState.userReducer.passwordConfirm
    }
}

const mapDispatchToProps = dispatch => {
    return {...bindActionCreators(userActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
