import React, { Component } from 'react'
import SearchBar from '../../components/movie/SearchBar'
import { connect } from 'react-redux'

class SearchContainer extends Component {

    state = {
        searchTerm: ''
    }

    handleOnChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
        event.preventDefault()
        this.state.searchTerm.length < 2 ? window.alert("Please enter a search with 2 or more characters") :
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIES_KEY}&language=en-US&query=${this.state.searchTerm}&page=1&include_adult=false`)
        .then(resp => resp.json())
        .then(data => this.props.dispatch({type: "MOVIES_LOADED", payload: data.results}))
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
