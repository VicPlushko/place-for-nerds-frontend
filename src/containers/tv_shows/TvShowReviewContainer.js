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
        const tvShowReviewBody = {
            title: event.target.elements.title.value,
            content: event.target.elements.content.value,
            show_id: this.props.show_id
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
             this.props.createTvShowReview(showReview)
             this.props.clearForm()
         })
    }


    handleOnTitleChange = (event) => {
        console.log(event.target.value)
        this.props.changeReviewTitle(event.target.value)
    }

    handleOnContentChange = (event) => {
        console.log(event.target.value)
        this.props.changeReviewContent(event.target.value)
    }

    displayReviewForm = (event) => {
        console.log(event.target)
        this.setState({
            clicked: true
        })
        if (this.props.isAuthenticated === false) {
            window.alert("Must be logged in to write a review")
        }else{
            <TvShowReviewForm />
        } 
    }

    componentDidMount() {
        this.props.getTvShowReviews(this.props.show_id)
    }

    render() {
        console.log("tv show review container props is", this.props)
        const tvShowReviews = this.props.tvShowReviews.map((showReview, i) => <TvShowReview key={i} title={showReview.title} content={showReview.content} show_id={showReview.show_id}/>)
        
        return (
            <div>
                {this.state.clicked === true 
                ? null
                :<ReviewButton handleReviewButton={this.displayReviewForm} />
                }
                
                {this.state.clicked === true && this.props.isAuthenticated === true 
                    ? <TvShowReviewForm key={this.props.show_id} title={this.props.title} content={this.props.content} handleTitleChange={this.handleOnTitleChange} handleContentChange={this.handleOnContentChange} handleSubmit={this.handleOnSubmit} />
                    : null  
                }
                <div>
                    <h1>Reviews:</h1>
                    <ul>
                       {tvShowReviews}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    console.log("tv show review global state is", globalState)
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
