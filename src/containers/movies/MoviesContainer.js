import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../actions/movie'
import Movie from '../../components/movie/Movie'
import SearchContainer from '../movies/SearchContainer'

class MoviesContainer extends Component {
    
    state = {
        sorted: false
    }

    handleClick = (event) => {
        const {getMovies} = this.props
        event.preventDefault()
        getMovies()
    }

    handleSortClick = () => {
        if (!this.state.sorted) {
            this.setState({
              sorted: true
            })
        }else {
           this.setState({
              sorted: false
           })
        }
        
    }

    render() {

        const {
            movies,
            loading
        } = this.props
        
        let sortedMovies = movies
        console.log("movie container props is", this.props)
        if (this.state.sorted) {
            sortedMovies = movies.map((movie) => movie).sort(function(a, b) {
                var titleA = a.title.toUpperCase(); // ignore upper and lowercase
                var titleB = b.title.toUpperCase(); // ignore upper and lowercase
                if (titleA < titleB) {
                  return -1;
                }
                if (titleA > titleB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
              });
         }

       const newMovies = sortedMovies.map((movie, i) => {
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
                  <button className='sort-btn' onClick={this.handleSortClick}>Sort</button>
                </div>
                </div>
                <div className='movies-container'>
                { loading 
                ? <h3>Loading...</h3> 
                : (movies.length === 0) 
                ? <p>No Movies Found</p>
                : newMovies}
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
