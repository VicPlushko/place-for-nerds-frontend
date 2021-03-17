import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews, changeTitle, changeContent, createReview, clearForm } from '../../actions/review'
import MovieReviewForm from '../../components/MovieReviewForm'
import Review from '../../components/movie/Review'

class MovieReviewContainer extends Component {

    handleOnSubmit = (event) => {
        const reviewBody = {
            title: event.target.elements.title.value,
            content: event.target.elements.content.value,
            movie_id: this.props.movie_id
        }

        const reviewURL = 'http://localhost:3001/reviews'
        event.preventDefault()
        fetch(reviewURL, {
        method: 'POST',
        body: JSON.stringify(reviewBody),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
         })
         .then(response => response.json())
         .then(review => {
             this.props.createReview(review)
             this.props.clearForm()
            })
         
    }


    handleOnTitleChange = (event) => {
        console.log(event.target.value)
        this.props.changeTitle(event.target.value)
    }

    handleOnContentChange = (event) => {
        console.log(event.target.value)
        this.props.changeContent(event.target.value)
    }

    componentDidMount() {
        this.props.getReviews(this.props.movie_id)
    }

    
    render() {
        console.log("movie review container props is", this.props)
            
            const reviews = this.props.reviews.map((review, i) => <Review key={i} title={review.title} content={review.content} movie_id={review.movie_id}/>)
         
        return (
            <div>
                <MovieReviewForm key={this.props.movie_id} title={this.props.title} content={this.props.content} handleTitleChange={this.handleOnTitleChange} handleContentChange={this.handleOnContentChange} handleSubmit={this.handleOnSubmit}/>
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
        loading: globalState.reviewReducer.loading,
        title: globalState.reviewReducer.title,
        content: globalState.reviewReducer.content
    }
} 


export default connect(mapStateToProps, { getReviews, changeTitle, changeContent, createReview, clearForm })(MovieReviewContainer)
