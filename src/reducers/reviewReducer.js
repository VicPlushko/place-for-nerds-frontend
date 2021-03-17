const reviewReducer = (state = {reviews: [], loading: false, title: "", content: "", posting: false}, action) => {
    switch(action.type) {
        case("LOADING_REVIEWS"):
            return {...state, loading: true}
        case("REVIEWS_LOADED"):
            return {...state, loading: false, reviews: action.payload}
        case("REVIEW_POSTING"):
            return {...state, posting: true}
        case("REVIEW_CREATED"):
            return {...state, posting: false, reviews: [...state.reviews, {title: action.payload, content: action.payload}]}
        case("CHANGE_TITLE"):
            return {...state, title: action.payload}
        case("CHANGE_CONTENT"):
            return {...state, content: action.payload}
        default:
            return state
    }
}

export default reviewReducer;