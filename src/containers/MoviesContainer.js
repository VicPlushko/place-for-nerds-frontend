import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movie'
import Movie from '../components/Movie'
import SearchContainer from '../containers/SearchContainer'
import Navigation from '../components/Navigation'

class MoviesContainer extends Component {

    componentDidMount() {
        this.props.getMovies()
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.getMovies()
    }

    render() {

        // console.log("movie container props is", this.props)
        const movies = this.props.movies.map((movie, i) => {
            return <Movie key={i} id={movie.id} title={movie.title} release_date={movie.release_date} synopsis={movie.synopsis} poster={movie.poster} movie_id={movie.movie_id}/>
            })
        
        return (
            <div>
                <header className='App-header'>
                    <Navigation />
                </header>
                <div className='App-header'>
                    <h1>Movies</h1>   
                </div>
                <SearchContainer />
                <div className="clear-btn">
                <button className='reload-movies' onClick={this.handleClick}>Clear Search</button>
                </div>
                <div className='movies-container'>
                {this.props.loading 
                ? <h3>Loading...</h3> 
                : (movies.length === 0) 
                ? <p>No Movies Found</p>
                :movies}
                </div>
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
