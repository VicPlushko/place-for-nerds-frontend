const gameReducer = (state = {games: [], loading: false}, action) => {
    switch(action.type) {
        case("GAMES_LOADING"):
            return {...state, loading: true}
        case("GAMES_LOADED"):
            return {...state, loading: false, games: action.payload}
        default:
            return state
    }
}

export default gameReducer