import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user'
import SignupForm from '../../components/user/SignupForm'
import { Redirect } from 'react-router'

class Signup extends Component {

    handleChangeUsername = (event) => {
        console.log(event.target.value)
        this.props.changeUsername(event.target.value)
    }

    handleChangeEmail = (event) => {
        console.log(event.target.value)
        this.props.changeEmail(event.target.value)
    }

    handleChangeEmailConfirm = (event) => {
        console.log(event.target.value)
        this.props.changeEmailConfirm(event.target.value)
    }

    handleChangePassword = (event) => {
        console.log(event.target.value)
        this.props.changePassword(event.target.value)
    }

    handleChangePasswordConfirm = (event) => {
        console.log(event.target.value)
        this.props.changePasswordConfirm(event.target.value)
    }

    handleOnSubmit = (event) => {
        const userInfo = {
            username: event.target.elements.username.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
        }
        event.preventDefault()
        const URL = 'http://localhost:3001/users'
        if (this.props.emailConfirm === this.props.email || this.props.passwordConfirm === this.props.password ) {
            fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                this.props.createUser(data)
            })
        }else {
            alert("Email or passwords do not match")
        }
        
    }

    render() {
        return (
            <div>
                <SignupForm  handleCreateUser={this.handleOnSubmit} changeUsername={this.handleChangeUsername} changeEmail={this.handleChangeEmail} changeEmailConfirm={this.handleChangeEmailConfirm} changePassword={this.handleChangePassword} changePasswordConfirm={this.handleChangePasswordConfirm} />
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
