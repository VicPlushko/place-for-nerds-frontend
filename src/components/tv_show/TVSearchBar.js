import React from 'react'

const TVSearchBar = (props) => {

    const {
        handleSubmit,
        handleChange
    } = props

    return (
        <div className='search-form'>
            <form className='search-bar' onSubmit={handleSubmit}>
                <input className='form-input' id='search-input' onChange={handleChange} type='text' placeholder='Search TV Shows' />
                <div className='show-submit-btn-div'>
                    <input id='show-submit-btn' type='submit' value='Search'/>
                </div>
            </form>
        </div>
    )
}

export default TVSearchBar
