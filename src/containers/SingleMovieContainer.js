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
        const movieUrl = `http:localhost:3001/movies/${this.state.id}`
        fetch(movieUrl)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                ...this.state,
                title: data.title,
                release_date: data.release_date,
                synopsis: data.overview,
                poster: data.poster_path
            })
        })
        debugger
    }
    
    render() {
         
        return (
            <div>
               <SingleMovie title={this.state.title}/>
            </div>
        )
    }
}

export default SingleMovieContainer
