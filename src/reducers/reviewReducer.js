const initialState = {
    reviews: [],
    loading: false, 
    posting: false,
    title: '', 
    content: ''
}

const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case('LOADING_REVIEWS'):
            return {...state, loading: true}
        case('REVIEWS_LOADED'):
            return {...state, loading: false, reviews: action.payload}
        case('REVIEW_POSTING'):
            return {...state, posting: true}
        case('REVIEW_CREATED'):
            return {...state, posting: false, reviews: [...state.reviews, {title: action.payload.title, content: action.payload.content}]}
        case('CHANGE_TITLE'):
            return {...state, title: action.payload}
        case('CHANGE_CONTENT'):
            return {...state, content: action.payload}
        case('CLEAR_FORM'):
            return {...state, title: '', content: ''}
        default:
            return state
    }
}

export default reviewReducer;