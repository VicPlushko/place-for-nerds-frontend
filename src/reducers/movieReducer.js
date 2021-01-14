export default (state = {movies: [], loading: false, searchTerm: ""}, action) => {
    switch(action.type) {
        case("LOADING_MOVIES"):
            return {...state, loading: true}
        case('MOVIES_LOADED'):
            return {...state, loading: false, movies: action.payload}
        default:
            return state
    }
}