const reviewReducer = (state = {reviews: [], loading: false}, action) => {
    switch(action.type) {
        case("LOADING_REVIEWS"):
            return {...state, loading: true}
        case("REVIEWS_LOADED"):
            return {...state, loading: false, reviews: action.payload}
        default:
            return state
    }
}

export default reviewReducer;