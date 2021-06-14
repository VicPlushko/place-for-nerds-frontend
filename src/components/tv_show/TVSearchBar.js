import React from 'react'

const TVSearchBar = (props) => {

    const {
        handleSubmit,
        handleChange
    } = props

    return (
        <div className='search-form'>
        <form className='search-bar' onSubmit={handleSubmit}>
            <input  id='search-input' onChange={handleChange} type='text' placeholder='Search TV Shows' />
            <input id='submit-btn' type='submit' value='Search'/>
        </form>
    </div>
    )
}

export default TVSearchBar
