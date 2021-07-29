export const getReviews = (movie_id) => {
    const reviewsURL = `https://place-for-nerds-api.herokuapp.com/reviews/${movie_id}`

    return dispatch => {
        dispatch({type: 'LOADING_REVIEWS'})
        fetch(reviewsURL)
        .then(resp => resp.json())
        .then(reviews => dispatch({type: 'REVIEWS_LOADED', payload: reviews}))
    }
}

export const changeTitle = (value) => {
    return dispatch => {
        dispatch({type: 'CHANGE_TITLE', payload: value})
    }
}

export const changeContent = (value) => {
    return dispatch => {
        dispatch({type: 'CHANGE_CONTENT', payload: value})
    }
}

export const createReview = (review) => {
    return dispatch => {
        dispatch({type: 'REVIEW_CREATED', payload: review})
    }
}

export const clearForm = () => {
    return dispatch => {
        dispatch({type: 'CLEAR_FORM'})
    }
}