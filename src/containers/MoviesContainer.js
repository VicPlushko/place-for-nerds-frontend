import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movie'
import Movie from '../components/Movie'
import Navigation from '../components/Navigation'

class MoviesContainer extends Component {

    componentDidMount() {
        this.props.getMovies()
    }

    render() {

        console.log("props is", this.props)
        const movies = this.props.movies.map((movie, i) => {
            return <Movie key={i} id={movie.id} title={movie.title} release_date={movie.release_date} synopsis={movie.synopsis} poster={movie.poster} />
            })
        
        return (
            <div>
                <header className='App-header'>
                    <Navigation />
                </header>
                <header className='App-header'>
                    <h1>Movies</h1>   
                </header>
               {this.props.loading ? <h3>Loading...</h3> : movies}
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
