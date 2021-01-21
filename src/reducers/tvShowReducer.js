export default (state = {shows: [], loading: false}, action) => {
    switch(action.type) {
        case("LOADING_SHOWS"):
            return {...state, loading: true}
        case('SHOWS_LOADED'):
            return {...state, loading: false, shows: action.payload}
        default:
            return state
    }
}