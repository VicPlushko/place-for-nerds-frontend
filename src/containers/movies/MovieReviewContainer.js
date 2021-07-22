import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReviews, changeTitle, changeContent, createReview, clearForm } from '../../actions/review'
import MovieReviewForm from '../../components/movie/MovieReviewForm'
import Review from '../../components/movie/Review'
import ReviewButton from '../../components/ReviewButton'

class MovieReviewContainer extends Component {

    state = {
        clicked: false
    }

    handleOnSubmit = (event) => {

        const {movie_id} = this.props

        const reviewBody = {
            title: event.target.elements.title.value,
            content: event.target.elements.content.value,
            movie_id: movie_id,
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
        const {changeTitle} = this.props
        console.log(event.target.value)
        changeTitle(event.target.value)
    }

    handleOnContentChange = (event) => {
        const {changeContent} = this.props
        console.log(event.target.value)
        changeContent(event.target.value)
    }

    displayReviewForm = (event) => {
        console.log(event.target)
        this.setState({
            clicked: true
        })
        if (this.props.isAuthenticated === false) {
            window.alert("Must be logged in to write a review")
        }else{
            <MovieReviewForm />
        }
    }

    componentDidMount() {
        const {getReviews, movie_id} = this.props
        getReviews(movie_id)
    }


    render() {

        const {
            reviews,
            loading,
            title,
            content,
            isAuthenticated,
            movie_id,
            movieTitle,
            backdrop
        } = this.props

        console.log("movie review container props is", this.props)
        const movieReviews = this.props.reviews.map((review, i) => <Review key={i} title={review.title} content={review.content} movie_id={review.movie_id} backdrop={backdrop}/>)
         
        return (
            <div className="review-form-div">
                {this.state.clicked === true 
                ? null
                :<ReviewButton handleReviewButton={this.displayReviewForm} />
                }
                {this.state.clicked === true && isAuthenticated === true 
                    ? <MovieReviewForm key={movie_id} title={title} content={content} handleTitleChange={this.handleOnTitleChange} handleContentChange={this.handleOnContentChange} handleSubmit={this.handleOnSubmit} backdrop={backdrop}/>
                    : null  
                }
                <div className='review-inner-div'>
                    <h1>Reviews:</h1>
                       {loading
                       ? <h3>Loading...</h3>
                       : (reviews.length === 0)
                       ? `There are no reviews for "${movieTitle}". Be the first to write a review.`
                       : movieReviews
                       }
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
        content: globalState.reviewReducer.content,
        isAuthenticated: globalState.userReducer.isAuthenticated,
        movies: globalState.movieReducer.movies
    }
} 


export default connect(mapStateToProps, { getReviews, changeTitle, changeContent, createReview, clearForm })(MovieReviewContainer)
