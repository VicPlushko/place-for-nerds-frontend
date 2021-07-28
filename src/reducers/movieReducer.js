const initialState = {
    movies: [],
    loading: false
}

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case('LOADING_MOVIES'):
            return {...state, loading: true}
        case('MOVIES_LOADED'):
            return {...state, loading: false, movies: action.payload}
        default:
            return state
    }
}

export default movieReducer;