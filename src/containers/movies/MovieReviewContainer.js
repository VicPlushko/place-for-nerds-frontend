import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieReviewForm from '../../components/MovieReviewForm'
import Review from '../../components/movie/Review'

class MovieReviewContainer extends Component {

    // state = {
    //     title: "",
    //     content: "",
    //     movie_id: this.props.movie_id,
    //     reviews: []
    // }

    handleOnSubmit = (event) => {
        const reviewURL = 'http://localhost:3001/reviews'
        event.preventDefault()
        fetch(reviewURL, {
        method: 'POST',
        body: JSON.stringify(this.props.reviews),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
         }).then(response => response.json())
         .then(data => {
                 this.setState({
                     reviews: {
                        title: data.title, 
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
            title: event.target.value,
            content: event.target.value
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
        //  console.log("movie review container state is", this.state)
          const reviews = this.props.reviews.map((review, i) => <Review key={i} title={review.title} content={review.content} />)
         
        
         
        return (
            <div>
                <MovieReviewForm key={this.props.title} title={this.props.title} content={this.props.content} handleChange={this.handleOnChange} handleSubmit={this.handleOnSubmit}/>
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

const mapStateToProps = globalState => {
    console.log("Movie review global state is", globalState)
    return {
        reviews: globalState.reviewReducer.reviews,
        loading: globalState.reviewReducer.loading
    }
} 

export default connect(mapStateToProps)(MovieReviewContainer)
