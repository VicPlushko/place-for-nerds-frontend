import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../actions/movie'
import Movie from '../../components/movie/Movie'
import SearchContainer from '../movies/SearchContainer'
import Navigation from '../../components/Navigation'

class MoviesContainer extends Component {

    state = {
        vote: 0,
    }

    componentDidMount() {
        this.props.getMovies()
    }

    handleClick = (event) => {
        event.preventDefault()
        this.props.getMovies()
    }
    
    // handleLikeButton = (event) => {
    //     let button = event.target.id
    //     if (button === this.state.movie_id.movie_id) {
    //         this.setState({
    //             vote: this.state.vote + 1,
    //         })
    //     }
    //     debugger
    // }

    render() {
        // console.log("movie container props is", this.props)
        const movies = this.props.movies.map((movie, i) => {
            return <Movie key={i} id={movie.id} title={movie.title} release_date={movie.release_date} synopsis={movie.synopsis} poster={movie.poster} movie_id={movie.movie_id} vote={this.state.vote} upvote={this.handleLikeButton}/>
            })
        
        return (
            <div>
                <header className='App-header'>
                    <Navigation />
                </header>
                <div className='App-header'>
                    <h1>Movies</h1>   
                </div>
                <div className="search-div">
                    <SearchContainer/>
                  <div className="clear-btn">
                    <button className='reload-movies' onClick={this.handleClick}>Clear Search</button>
                  </div>
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

 const mapStateToProps = globalState => {
    console.log('global state is', globalState)
    return {
        movies: globalState.movieReducer.movies,
        loading: globalState.movieReducer.loading
    }
}
export default connect(mapStateToProps, { getMovies })(MoviesContainer)
