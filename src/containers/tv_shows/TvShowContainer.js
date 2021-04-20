import React, { Component } from 'react'
import { connect } from 'react-redux'
import TvShow from '../../components/tv_show/TvShow'
import TvSearch from '../../containers/tv_shows/TvSearch'
import { getShows } from '../../actions/tvShows'

class TvShowContainer extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.getShows()
    } 

    render() {

        console.log("tv show container props is", this.props)
        const shows = this.props.shows.map((show, i) => {
            return <TvShow key={i}  title={show.name} release_date={show.first_air_date} synopsis={show.overview} poster={show.poster_path} show_id={show.id}/>
            })
        return (
            <div>
                <div className='App-header'>
                    <h1>TV Shows</h1>   
                </div>
                <div className='search-div'>
                    <TvSearch/>
                    <div className="clear-btn">
                    <button className='reload-movies' onClick={this.handleClick}>Clear Search</button>
                  </div>
                </div>
                <div className='movies-container'>
                {this.props.loading 
                ? <h3>Loading...</h3> 
                : (shows.length === 0) 
                ? <p>No Movies Found</p>
                : shows}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('tv show state is', state)
    return {
        shows: state.tvShowReducer.shows,
        loading: state.tvShowReducer.loading
    }
}

export default connect(mapStateToProps, { getShows })(TvShowContainer)
