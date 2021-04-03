import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'
import RegistrationForm from '../../components/user/RegistrationForm'
// import { Redirect } from 'react-router-dom'

class Signup extends Component {

    handleChangeUsername = (event) => {
        console.log("username is", event.target.value)
        this.props.changeUsername(event.target.value)
    }

    handleChangeEmail = (event) => {
        console.log("email is", event.target.value)
        this.props.changeEmail(event.target.value)
    }

    handleChangeEmailConfirm = (event) => {
        console.log("email confirm is", event.target.value)
        this.props.changeEmailConfirm(event.target.value)
    }

    handleChangePassword = (event) => {
        console.log("password is", event.target.value)
        this.props.changePassword(event.target.value)
    }

    handleChangePasswordConfirm = (event) => {
        console.log("password confirm is", event.target.value)
        this.props.changePasswordConfirm(event.target.value)
    }

    handleOnSubmit = (event) => {
        const userInfo = {
            username: event.target.elements.username.value,
            email: event.target.elements.email.value,
            password: event.target.elements.passwordField.value,
        }
        event.preventDefault()
        const URL = 'http://localhost:3001/register'
        if (this.props.passwordConfirm === this.props.password ) {
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
                // localStorage.setItem("token", data.jwt)
                this.props.createUser(data)
                this.props.history.push("/login")
            })
            // debugger
            
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
