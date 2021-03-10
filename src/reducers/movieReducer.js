const movieReducer = (state = {movies: [], loading: false}, action) => {
    switch(action.type) {
        case("LOADING_MOVIES"):
            return {...state, loading: true}
        case('MOVIES_LOADED'):
            return {...state, loading: false, movies: action.payload}
        default:
            return state
    }
}

export default movieReducer;