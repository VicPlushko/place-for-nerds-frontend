import React from 'react'

const SearchBar = (props) => {
    const BarStyling = {}
    return (
        <div className='search-form'>
            <form className='search-bar' onSubmit={props.handleSubmit}>
                <input  id='search-input' onChange={props.handleChange} type='text' placeholder='Search Movies' />
                <input id='submit-btn' type='submit' value='Search'/>
            </form>
        </div>
    )
}

export default SearchBar
