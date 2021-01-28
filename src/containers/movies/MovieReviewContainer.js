import React, { Component } from 'react'
import MovieReview from '../../components/MovieReview'
import Review from '../../components/movie/Review'

class MovieReviewContainer extends Component {

    state = {
        content: "",
        movie_id: this.props.movie_id,
        reviews: []
    }

    handleOnSubmit = (event) => {
        const reviewURL = 'http://localhost:3001/reviews'
        alert('A Review was submitted', this.state)
        event.preventDefault()
        fetch(reviewURL, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
         }).then(response => response.json())
         .then(data => {
             if (data.error === undefined) {
                 alert("A review has been submitted", this.state)
             }else {
                 alert(data.error, this.state)
             }
         })
    }

    handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            content: event.target.value,
        })
    }
    render() {

        const reviews = this.state.reviews.map((review, i) => {
               return <Review key={i} reviews={this.state.reviews} movie_id={review.movie_id} content={review.content} review_id={review.id}/>
        })
        return (
            <div>
                <MovieReview key={this.state.movie_id} reviews={this.state.reviews} content={this.state.content} movie_id={this.state.movie_id} handleChange={this.handleOnChange} handleSubmit={this.handleOnSubmit}/>
                {reviews}
            </div>
        )
    }
}

export default MovieReviewContainer
