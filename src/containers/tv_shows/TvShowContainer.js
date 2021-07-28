import React, { Component } from 'react'
import { connect } from 'react-redux'
import TvShow from '../../components/tv_show/TvShow'
import TvSearch from '../../containers/tv_shows/TvSearch'
import { getShows } from '../../actions/tvShows'

class TvShowContainer extends Component {

    handleClick = (event) => {
        const {getShows} = this.props
        event.preventDefault()
        getShows()
    } 

    render() {

        const {shows, loading} = this.props

        const initialShows = shows.map((show, i) => {
            return <TvShow key={i}  title={show.name} release_date={show.first_air_date} synopsis={show.overview} poster={show.poster_path} show_id={show.id}/>
            })
        return (
            <div className='movie-outer-div'>
                <div className='movies-header'>
                    <h1>TV Shows</h1>   
                </div>
                <div className='search-div'>
                    <TvSearch/>
                    <div className='clear-btn'>
                    <button className='reload-movies' id='tvshow-reload' onClick={this.handleClick}>Clear Search</button>
                  </div>
                </div>
                <div className='movies-container'>
                { loading 
                ? <h3>Loading...</h3> 
                : (shows.length === 0) 
                ? <p>No Shows Found</p>
                : initialShows}
                </div>
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    return {
        shows: globalState.tvShowReducer.shows,
        loading: globalState.tvShowReducer.loading
    }
}

export default connect(mapStateToProps, { getShows })(TvShowContainer)
