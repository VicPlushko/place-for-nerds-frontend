import React from 'react'

const SearchBar = (props) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"}
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} type='text' placeholder='Search Movies' style={BarStyling} />
                <input type='submit' value='Search'/>
            </form>
        </div>
    )
}

export default SearchBar
