const tvShowReviewReducer = (state = {tvShowReviews: [], loading: false, title: "", content: "", posting: false}, action) => {
    switch(action.type) {
        case("LOADING_TV_SHOW_REVIEWS"):
            return {...state, loading: true}
        case("TV_SHOW_REVIEWS_LOADED"):
            return {...state, loading: false, tvShowReviews: action.payload}
        case("TV_SHOW_REVIEW_POSTING"):
            return {...state, posting: true}
        case("TV_SHOW_REVIEW_CREATED"):
            return {...state, posting: false, tvShowReviews: [...state.tvShowReviews, {title: action.payload.title, content: action.payload.content}]}
        case("CHANGE_REVIEW_TITLE"):
            return {...state, title: action.payload}
        case("CHANGE_REVIEW_CONTENT"):
            return {...state, content: action.payload}
        case("CLEAR_FORM"):
            return {...state, title: "", content: ""}
        default:
            return state
    }
}

export default tvShowReviewReducer;