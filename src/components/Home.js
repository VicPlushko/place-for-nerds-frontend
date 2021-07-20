import React, {Component} from 'react'
import {connect} from 'react-redux'
import HomepageMovie from './movie/HomepageMovie'
import HomepageShow from './tv_show/HomepageShow'

class Home extends Component {

    render() {

        const {
            movies,
            loading,
            shows
        } = this.props

        const theaterMovies = movies.map((movie, i) => {
            return <HomepageMovie key={i} id={movie.id} title={movie.title} release_date={movie.release_date} synopsis={movie.overview} poster={movie.poster_path}/>
        })

        const homeShows = shows.map((show, i) => {
            return <HomepageShow key={i}  title={show.name} release_date={show.first_air_date} synopsis={show.overview} poster={show.poster_path} show_id={show.id} />
        })

        return (
            <div>
                <div className='recent-movies-h1'>
                    <h1>Recently Released Movies</h1>
                </div>
                <div className='homepage-movies'>
                    { loading 
                    ? <h3>Loading...</h3> 
                    : theaterMovies
                    }
                </div>
                <div className='recent-shows-h1'>
                    <h1>Top Rated Shows</h1>
                </div>
                <div className='homepage-shows'>
                    { loading
                    ? <h3>Loading...</h3>
                    : homeShows
                    }
                </div>        
            </div>
    )}
}

const mapStateToProps = globalState => {
    console.log("Home movie props is", globalState.movieReducer.movies && globalState.tvShowReducer.shows)
    return {
        movies: globalState.movieReducer.movies,
        loading: globalState.movieReducer.loading,
        shows: globalState.tvShowReducer.shows,
        loading: globalState.tvShowReducer.loading
    }
} 

export default connect(mapStateToProps)(Home) 