const userReducer = (state = {username: "", password: "", email: ""}, action) => {
    switch(action.type) {
        case("CREATE_USER"):
            return {...state, 
                username: action.payload.username, 
                password: action.payload.password,
                email: action.payload.email
            }
        default:
            return state
    }

}