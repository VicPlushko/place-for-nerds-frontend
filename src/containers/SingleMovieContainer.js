import React, { Component } from 'react'
import { getSingleMovie } from '../actions/singleMovie'

class SingleMovieContainer extends Component {

    state = {
        title: "",
        release_date: "",
        synopsis: "",
        poster: ""
    }

    componentDidMount() {
        this.props.getSingleMovie()
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }
}

export default SingleMovieContainer
