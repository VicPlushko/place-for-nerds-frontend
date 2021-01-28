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
        this.setState({
            content: ""
        })
    }

    handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            content: event.target.value, 
        })
        
    }

    componentDidMount() {
        const URL = `http://localhost:3001/movies/${this.state.movie_id}`

        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            if (data.reviews !== undefined) {
               this.setState({
                  ...this.state,
                  reviews: data.reviews.map((review, i) => {
                     return <Review key={i} content={review.content} movie_id={review.movie_id} />
               })
            })
            }
        })
    }

    componentDidUpdate(prevState) {
        const URL = `http://localhost:3001/movies/${this.state.movie_id}`
       if (this.state.reviews !== prevState.reviews) {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            if (data.reviews !== undefined) {
               this.setState({
                  ...this.state,
                  reviews: data.reviews.map((review, i) => {
                     return <Review key={i} content={review.content} movie_id={review.movie_id} />
               })
            })
            }
        })
       }
    }
    render() {
         console.log("movie review container state is", this.state)
        return (
            <div>
                <MovieReview key={this.state.movie_id} content={this.state.content} movie_id={this.state.movie_id} handleChange={this.handleOnChange} handleSubmit={this.handleOnSubmit}/>
                <div>
                    <h1>Reviews:</h1>
                    <ul>
                       {this.state.reviews}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MovieReviewContainer
