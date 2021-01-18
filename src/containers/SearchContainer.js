import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'

class SearchContainer extends Component {

    state = {
        searchTerm: ""
    }

    handleOnChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.state.searchTerm.length < 2 ? <p>Please enter a valid search</p> :
        fetch(`http://localhost:3001/movies/search/${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.props.dispatch({type: "MOVIES_LOADED", payload: data}))
        event.target.reset()
    }
    render() {
        
        return (
            <div className='search'>
                <SearchBar handleChange={this.handleOnChange} handleSubmit={this.handleOnSubmit}/>
            </div>
        )
    }
}

export default connect()(SearchContainer)
