import React from 'react'

const SearchBar = (props) => {
    return (
        <div>
            <form>
                <input onChange={props.handleChange} id='search-bar' type='text' placeholder='Search' />
                <input type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SearchBar
