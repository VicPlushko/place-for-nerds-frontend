import React from 'react'

const LoginForm = (props) => {
    return (
        <div className='user-form-div'>
            <h1>Login</h1>
            <form className='user-form' onSubmit={props.handleLoginUser}>
                <div className='form-field'>
                    <input className='form-input' onChange={props.changeUsername} type='text' name='username' placeholder='Username'/>
                    <label className='form-label'>Hello, My Username Is</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={props.changePassword} type='password' name='passwordField' placeholder='Password'/>
                    <label className='form-label'>Password</label>
                </div>
                <div className='btn-submit'>
                    <input className='user-submit-btn' type='submit' value='Login'/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
