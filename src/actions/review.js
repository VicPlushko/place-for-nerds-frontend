export const getReviews = (movie_id) => {
    const reviewsURL = `http://localhost:3001/reviews/${movie_id}`

    return dispatch => {
        dispatch({type: "LOADING_REVIEWS"})
        console.log("in fetch")
        fetch(reviewsURL)
        .then(resp => resp.json())
        .then(reviews => dispatch({type: "REVIEWS_LOADED", payload: reviews}))
    }
}