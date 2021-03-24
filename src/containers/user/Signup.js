import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupForm from '../../components/user/SignupForm'

class Signup extends Component {


    render() {
        return (
            <div>
                <SignupForm  handleCreateUser={this.handleOnSubmit} changeUsername={this.handleChangeUsername} ChangeEmail={this.handleChangeEmail} changeEmailConfirm={this.handleChangeEmailConfirm} changePassword={this.handleChangePassword} changePasswordConfirm={this.handleChangePasswordConfirm} />
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
export default connect(mapStateToProps)(Signup)
