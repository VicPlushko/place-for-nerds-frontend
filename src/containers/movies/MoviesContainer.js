import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../actions/movie'
import Movie from '../../components/movie/Movie'
import SearchContainer from '../movies/SearchContainer'

class MoviesContainer extends Component {

    handleClick = (event) => {
        const {getMovies} = this.props
        event.preventDefault()
        getMovies()
    }

    render() {

        const {
            movies,
            loading
        } = this.props

       const movieList = movies.map((movie, i) => {
            return <Movie key={i} id={movie.id} title={movie.title} release_date={movie.release_date} synopsis={movie.overview} poster={movie.poster_path}/>
        })
        
        return (
            <div className='movie-outer-div'>
                <div className='movies-header'>
                    <h1>Movies</h1>
                    <div className="search-div">
                    <SearchContainer/>
                  <div className="clear-btn">
                    <button className='reload-movies' onClick={this.handleClick}>Clear Search</button>
                  </div>
                </div>
                </div>
                <div className='movies-container'>
                { loading 
                ? <h3>Loading...</h3> 
                : (movies.length === 0) 
                ? <p>No Movies Found</p>
                : movieList}
                </div>
            </div>
            
        )
    }
}

 const mapStateToProps = globalState => {
    console.log('global state is', globalState)
    return {
        movies: globalState.movieReducer.movies,
        loading: globalState.movieReducer.loading,
    }
}
export default connect(mapStateToProps, { getMovies })(MoviesContainer)
