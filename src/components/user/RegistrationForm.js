import React from 'react'

const RegistrationForm = (props) => {
    console.log('registration form props', props)
    return (
        <div className='user-form-div'>
            <h1>Sign Up</h1>
            <form className='user-form' onSubmit={props.handleCreateUser}>
                <div className='form-field'>
                    <input className='form-input' onChange={props.changeUsername} type='text' name='username' placeholder='Username'/>
                    <label className='form-label'>Hello, My Username Is</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={props.changeEmail} type='text' name='email' placeholder='Email'/>
                    <label className='form-label'>Email</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={props.changeEmailConfirm} type='text' name='emailConfirm' placeholder='Confirm Email'/>
                    <label className='form-label'>Confirm Email</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={props.changePassword} type='password' name='passwordField' placeholder='Password'/>
                    <label className='form-label'>Password</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={props.changePasswordConfirm} type='password' name='passwordConfirm' placeholder='Confirm Password'/>
                    <label className='form-label'>Confirm Password</label>
                </div>
                <div className='btn-submit'>
                    <input className='user-submit-btn' type='submit' value='Create Account'/>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
