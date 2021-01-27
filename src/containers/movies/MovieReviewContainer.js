import React, { Component } from 'react'
import MovieReview from '../../components/MovieReview'

class MovieReviewContainer extends Component {

    state ={
        content: "",
        movie_id: this.props.movie_id
    }

    handleOnSubmit = (event) => {
        const reviewURL = 'http://localhost:3001/reviews'
        alert('A Review was submitted' + this.state)
        event.preventDefault()
        fetch(reviewURL, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
         }).then(response => console.log(response.json()))
    
    }

    handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            content: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <MovieReview content={this.state.content} movie_id={this.state.movie_id} handleChange={this.handleOnChange} handleSubmit={this.handleOnSubmit}/>
            </div>
        )
    }
}

export default MovieReviewContainer
