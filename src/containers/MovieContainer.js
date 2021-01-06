import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movie'

class MovieContainer extends Component {

    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        console.log("props is", this.props)
        const movies = this.props.movies.map((movie, i) => {
            return <li key={i}>{movie.title}</li>
        })
        return (
            <div>
               {this.props.loading ? <h3>Loading...</h3> : movies} 
            </div>
        )
    }
}

 const mapStateToProps = state => {
    console.log(state)
    return {
        movies: state.movieReducer.movies,
        loading: state.movieReducer.loading
    }
}
export default connect(mapStateToProps, { getMovies })(MovieContainer)
