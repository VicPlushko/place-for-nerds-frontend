import React from 'react'

const SignupForm = (props) => {
    console.log('sign up form props', props)
    return (
        <div className='user-form-div'>
            <h1>Sign Up</h1>
            <form className='user-form' onSubmit={props.handleCreateUser}>
                <div className='form-field'>
                    <input onChange={props.changeUsername} type='text' name='username' placeholder='Username'/>
                </div>
                <div className='form-field'>
                    <input onChange={props.changeEmail} type='text' name='email' placeholder='Email'/>
                </div>
                <div className='form-field'>
                    <input onChange={props.changeEmailConfirm} type='text' name='emailConfirm' placeholder='Confirm Email'/>
                </div>
                <div className='form-field'>
                    <input onChange={props.changePassword} type='password' name='password' placeholder='Password'/>
                </div>
                <div className='form-field'>
                    <input onChange={props.changePasswordConfirm} type='password' name='passwordConfirm' placeholder='Confirm Password'/>
                </div>
                <div className='btn-submit'>
                    <input className='user-submit-btn' type='submit' value='Create Account'/>
                </div>

            </form>
        </div>
    )
}

export default SignupForm
