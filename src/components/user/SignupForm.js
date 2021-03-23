import React from 'react'

export const SignupForm = (props) => {
    return (
        <div className='user-form-div'>
            <form className='user-form'onSubmit={props.handleCreateUser}>
                <div className='form-field'>
                    <label>Username: </label>
                    <input onChange={props.handleChangeUsername} type='text' placeholder='Username'/>
                </div>
                <div className='form-field'>
                    <label>Email: </label>
                    <input onChange={props.handleChangeEmail} type='text' placeholder='Email'/>
                </div>
                <div className='form-field'>
                    <label>Email Confirmation: </label>
                    <input onChange={props.handleChangeEmailConfirm} type='text' placeholder='Confirm Email'/>
                </div>
                <div className='form-field'>
                    <label>Password: </label>
                    <input onChange={props.handleChangePassword} type='password' placeholder='Password'/>
                </div>
                <div className='form-field'>
                    <label>Password: </label>
                    <input onChange={props.handleChangePasswordConfirm} type='password' placeholder='Confirm Password'/>
                </div>
                <div className='btn-submit'>
                    <input className='user-submit-btn' type='submit' value='Create Account'/>
                </div>

            </form>
        </div>
    )
}
