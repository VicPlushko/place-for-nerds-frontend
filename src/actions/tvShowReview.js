export const getTvShowReviews = (show_id) => {
    const showReviewsURL = `https://place-for-nerds-api.herokuapp.com/tv_show_reviews/${show_id}`

    return dispatch => {
        dispatch({type: 'LOADING_TV_SHOW_REVIEWS'})
        fetch(showReviewsURL)
        .then(resp => resp.json())
        .then(tvShowReviews => dispatch({type: 'TV_SHOW_REVIEWS_LOADED', payload: tvShowReviews}))
    }
}

export const changeReviewTitle = (value) => {
    return dispatch => {
        dispatch({type: 'CHANGE_REVIEW_TITLE', payload: value})
    }
}

export const changeReviewContent = (value) => {
    return dispatch => {
        dispatch({type: 'CHANGE_REVIEW_CONTENT', payload: value})
    }
}

export const createTvShowReview = (tvShowReview) => {
    return dispatch => {
        dispatch({type: 'TV_SHOW_REVIEW_CREATED', payload: tvShowReview})
    }
}

export const clearForm = () => {
    return dispatch => {
        dispatch({type: 'CLEAR_FORM'})
    }
}