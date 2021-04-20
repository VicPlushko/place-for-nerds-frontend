import React from 'react'

const TVSearchBar = (props) => {
    return (
        <div className='search-form'>
        <form className='search-bar' onSubmit={props.handleSubmit}>
            <input  id='search-input' onChange={props.handleChange} type='text' placeholder='Search TV Shows' />
            <input id='submit-btn' type='submit' value='Search'/>
        </form>
    </div>
    )
}

export default TVSearchBar
