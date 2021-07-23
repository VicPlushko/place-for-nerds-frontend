import React, { Component } from 'react'
import { connect } from 'react-redux'
import TVSearchBar from '../../components/tv_show/TVSearchBar'

class TvSearch extends Component {

    state = {
        searchTerm: ''
    }

    handleInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        const {searchTerm} = this.state
        const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
        event.preventDefault()
        searchTerm.length < 2 ? window.alert('Please enter a search with 2 or more characters') :
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${MOVIES_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
        .then(resp => resp.json())
        .then(data => this.props.dispatch({type: 'SHOWS_LOADED', payload: data.results}))
        event.target.reset()
    }
    render() {
        return (
            <div className='search'>
                <TVSearchBar handleChange={this.handleInputChange} handleSubmit={this.handleFormSubmit}/>
            </div>
        )
    }
}

export default connect()(TvSearch) 
