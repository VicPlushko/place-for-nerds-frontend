import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'

class SearchContainer extends Component {

    handleOnChange = (e) => {
        return (
            this.setState({
                searchTerm: e.target.value
            })
        )
    }

    render() {
        return (
            <div>
                <SearchBar handleChange={this.handleOnChange}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('search state is', state)
    return {
        movies: state.movieReducer.movies,
        searchTerm: state.movieReducer.searchTerm 
    }
}

export default connect(mapStateToProps)(SearchContainer)
