import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tvShowReviewActions from '../../actions/tvShowReview'
import TvShowReviewForm from '../../components/tv_show/TvShowReviewForm'
import TvShowReview from '../../components/tv_show/TvShowReview'
import ReviewButton from '../../components/ReviewButton'

class TvShowReviewContainer extends Component {

    state = {
        clicked: false
    }

    handleOnSubmit = (event) => {

        const {
            show_id,
            createTvShowReview,
            clearForm,
            title,
            content
        } = this.props

        if (title.length === 0) {
            window.alert('Review title can not be empty.')
            event.preventDefault()
        } else if (content.length === 0) {
            window.alert('Review body can not be empty.')
            event.preventDefault()
        } else {
            const tvShowReviewBody = {
                title: event.target.elements.title.value,
                content: event.target.elements.content.value,
                show_id: show_id
            }

            const showReviewURL = 'http://localhost:3001/tv_show_reviews'
            event.preventDefault()
            fetch(showReviewURL, {
            method: 'POST',
            body: JSON.stringify(tvShowReviewBody),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
             .then(response => response.json())
             .then(showReview => {
                 createTvShowReview(showReview)
                 clearForm()
             })
        }
    }


    handleOnTitleChange = (event) => {
        const {changeReviewTitle} = this.props
        changeReviewTitle(event.target.value)
    }

    handleOnContentChange = (event) => {
        const {changeReviewContent} = this.props
        changeReviewContent(event.target.value)
    }

    displayReviewForm = (event) => {
        const {isAuthenticated} = this.props
        this.setState({
            clicked: true
        })
        if (isAuthenticated === false) {
            window.alert('Must be logged in to write a review')
        }else{
            <TvShowReviewForm />
        } 
    }

    componentDidMount() {
        const {getTvShowReviews, show_id} = this.props
        getTvShowReviews(show_id)
    }

    render() {

        const {
            tvShowReviews,
            isAuthenticated,
            show_id,
            title,
            content,
            loading,
            showTitle,
            backdrop
        } = this.props

        const ShowReviews = tvShowReviews.map((showReview, i) => <TvShowReview key={i} title={showReview.title} content={showReview.content} show_id={showReview.show_id}/>)
        
        return (
            <div className='review-form-div'>
                {this.state.clicked === true 
                ? null
                :<ReviewButton handleReviewButton={this.displayReviewForm} />
                }
                
                {this.state.clicked === true && isAuthenticated === true 
                    ? <TvShowReviewForm key={show_id} title={title} content={content} handleTitleChange={this.handleOnTitleChange} handleContentChange={this.handleOnContentChange} handleSubmit={this.handleOnSubmit} backdrop={backdrop}/>
                    : null  
                }
                <div className='review-inner-div'>
                    <h1>Reviews:</h1>
                    <ul>
                       { loading
                       ? <h3>Loading...</h3>
                       : (tvShowReviews.length === 0)
                       ? `There are no reviews for "${showTitle}". Be the first to write a review.`
                       : ShowReviews
                       }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = globalState => {

    return {
        tvShowReviews: globalState.tvShowReviewReducer.tvShowReviews,
        loading: globalState.tvShowReviewReducer.loading,
        title: globalState.tvShowReviewReducer.title,
        content: globalState.tvShowReviewReducer.content,
        isAuthenticated: globalState.userReducer.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {...bindActionCreators(tvShowReviewActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TvShowReviewContainer) 
