import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShows } from '../../actions/tvShows'
import TvShow from '../../components/tv_show/TvShow'
// import SearchContainer from '../containers/SearchContainer'
import Navigation from '../../components/Navigation'


class TvShowContainer extends Component {

    componentDidMount() {
        this.props.getShows()
    }

    render() {

        console.log("tv show container props is", this.props)
        const shows = this.props.shows.map((show, i) => {
            return <TvShow key={i}  title={show.name} release_date={show.first_air_date} synopsis={show.overview} poster={show.poster_path} show_id={show.id}/>
            })
        return (
            <div>
                <header className='App-header'>
                    <Navigation />
                </header>
                <div className='App-header'>
                    <h1>Tv Shows</h1>   
                </div>
                <div className='movies-container'>
                {this.props.loading ? <h3>Loading...</h3> : shows}
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
