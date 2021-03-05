import React, { Component } from 'react'
import MovieReviewForm from '../../components/MovieReviewForm'
// import Review from '../../components/movie/Review'

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
                 this.setState({
                     reviews: {
                        content: data.content,
                        movie_id: data.movie_id
                    }
                 })
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

    // componentDidMount() {
    //     const MOVIES_KEY = process.env.REACT_APP_MOVIES_KEY
    //     const URL = `https://api.themoviedb.org/3/movie/${this.state.movie_id}?api_key=${MOVIES_KEY}&language=en-US`

    //     fetch(URL)
    //     .then(resp => console.log(resp.json()))
    //     .then(data => {
    //         if (data.reviews !== undefined) {
    //            this.setState({
    //               ...this.state,
    //               reviews: data.reviews.map(review => review.content)
    //         })
    //         }
    //     })
    // }

    
    render() {
         console.log("movie review container state is", this.state)
          const reviews = this.state.reviews.map((review) => review.content )
         
        
         
        return (
            <div>
                <MovieReviewForm key={this.state.movie_id} content={this.state.content} movie_id={this.state.movie_id} handleChange={this.handleOnChange} handleSubmit={this.handleOnSubmit}/>
                <div>
                    <h1>Reviews:</h1>
                    <ul>
                       {reviews}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MovieReviewContainer
