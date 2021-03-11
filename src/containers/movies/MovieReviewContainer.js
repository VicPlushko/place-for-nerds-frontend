import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews } from '../../actions/review'
import MovieReviewForm from '../../components/MovieReviewForm'
import Review from '../../components/movie/Review'

class MovieReviewContainer extends Component {

    state = {
        title: "",
        content: "",
        movie_id: this.props.movie_id,
        reviews: []
    }

    handleOnSubmit = (event) => {
        const reviewBody = {
            title: this.state.title,
            content:this.state.content,
            movie_id: this.state.movie_id
        }
        const reviewURL = 'http://localhost:3001/reviews'
        event.preventDefault()
        this.props.dispatch({type: "REVIEW_POSTING"})
        fetch(reviewURL, {
        method: 'POST',
        body: JSON.stringify(reviewBody),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
         }).then(response => console.log(response.json()))
         .then(review => this.props.dispatch({type: "REVIEW_CREATED", payload: review}))
                 
        
    }

    handleOnTitleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            title: event.target.value,
        })
    }

    handleOnContentChange = (event) => {
        console.log(event.target.value)
        this.setState({
            content: event.target.value,
        })
    }

    componentDidMount() {
        this.props.getReviews(this.props.movie_id)
    }

    
    render() {
        console.log("movie review container props is", this.props)
            
            const reviews = this.props.reviews.map((review, i) => <Review key={i} title={review.title} content={review.content} movie_id={review.movie_id}/>)
         
        return (
            <div>
                <MovieReviewForm key={this.state.movie_id} title={this.state.title} content={this.state.content} handleTitleChange={this.handleOnTitleChange} handleContentChange={this.handleOnContentChange} handleSubmit={this.handleOnSubmit}/>
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

export default connect(mapStateToProps, { getReviews })(MovieReviewContainer)
