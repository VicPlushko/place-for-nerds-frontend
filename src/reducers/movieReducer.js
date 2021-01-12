export default (state = {movies: [], loading: false}, action) => {
    switch(action.type) {
        case("LOADING_MOVIES"):
            return {...state, loading: true}
        case('MOVIES_LOADED'):
            return {...state, loading: false, movies: action.payload}
        case('LOADING_SINGLE_MOVIE'):
            return {...state, loading: true}
        case('SINGLE_MOVIE_LOADED'):
            return {...state, loading: false, movie: action.payload}
        default:
            return state
    }
}