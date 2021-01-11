import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movie'
import Movie from '../components/Movie'

class MoviesContainer extends Component {

    componentDidMount() {
        this.props.getMovies()
    }

    render() {

        const imageURL = 'http://image.tmdb.org/t/p/w185'

        console.log("props is", this.props)
        const movies = this.props.movies.map((movie, i) => {
            return <a href=""><img key={i} src={imageURL + movie.poster_path} alt=""></img>{movie.title}</a>
        })
        return (
            <div>
                <header className='App-header'>
                    <h1>Movies</h1>
                </header>
               {this.props.loading ? <h3>Loading...</h3> : movies}
               {/* <Movie /> */}
            </div>
        )
    }
}

 const mapStateToProps = state => {
    console.log('state is', state)
    return {
        movies: state.movieReducer.movies,
        loading: state.movieReducer.loading
    }
}
export default connect(mapStateToProps, { getMovies })(MoviesContainer)
