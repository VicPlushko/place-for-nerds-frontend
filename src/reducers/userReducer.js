const userReducer = (state = {username: "", password: ""}, action) => {
    switch(action.type) {
        case("CREATE_USER"):
            return {...state, username: action.payload.username, password: action.payload.password}
        default:
            return state
    }

}