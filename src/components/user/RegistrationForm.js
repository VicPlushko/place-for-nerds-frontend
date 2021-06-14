import React from 'react'

const RegistrationForm = (props) => {

    const {
        handleCreateUser,
        changeUsername,
        changeEmail,
        changeEmailConfirm,
        changePassword,
        changePasswordConfirm
    } = props

    console.log('registration form props', props)
    
    return (
        <div className='user-form-div'>
            <h1>Sign Up</h1>
            <form className='user-form' onSubmit={handleCreateUser}>
                <div className='form-field'>
                    <input className='form-input' onChange={changeUsername} type='text' name='username' placeholder='Username'/>
                    <label className='form-label'>Hello, My Username Is</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={changeEmail} type='text' name='email' placeholder='Email'/>
                    <label className='form-label'>Email</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={changeEmailConfirm} type='text' name='emailConfirm' placeholder='Confirm Email'/>
                    <label className='form-label'>Confirm Email</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={changePassword} type='password' name='passwordField' placeholder='Password'/>
                    <label className='form-label'>Password</label>
                </div>
                <div className='form-field'>
                    <input className='form-input' onChange={changePasswordConfirm} type='password' name='passwordConfirm' placeholder='Confirm Password'/>
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
