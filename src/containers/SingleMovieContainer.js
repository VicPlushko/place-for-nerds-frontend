import React, { Component } from 'react'
// import { connect } from 'react-redux'
import SingleMovie from '../components/SingleMovie'
// import movieReducer from '../reducers/movieReducer'
// import { getSingleMovie } from '../actions/movie'

class SingleMovieContainer extends Component {
    

    state = {
        id: 1,
        title: "",
        release_date: "",
        synopsis: "",
        poster: ""
    }

    componentDidMount() {
        const movieUrl = `http://localhost:3001/movies/${this.state.id}`
        fetch(movieUrl)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                ...this.state,
                title: data.title,
                release_date: data.release_date,
                synopsis: data.synopsis,
                poster: data.poster
            })
        })
    }
    
    render() {
         
        return (
            <div>
               <SingleMovie title={this.state.title} release_date={this.state.release_date} synopsis={this.state.synopsis} poster={this.state.poster}/>
            </div>
        )
    }
}

export default SingleMovieContainer
