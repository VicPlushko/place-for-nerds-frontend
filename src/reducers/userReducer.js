const initialState = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    emailConfirm: "",
    isLoggedIn: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case("CREATE_USER"):
            return {...state, 
                username: action.payload.username, 
                password: action.payload.password,
                email: action.payload.email,
                isLoggedIn: true
            }
        case("START_USER_LOGIN"):
            return {...state, isLoggedIn: false}
        case("LOGIN_USER_SUCCESS"):
            return {...state, isLoggedIn: true, username: action.payload.username, password: action.payload.password}
        case("LOGIN_USER_FAIL"):
            return {...state, isLoggedIn: false}
        case("CHANGE_USERNAME"):
            return {...state, username: action.payload}
        case("CHANGE_PASSWORD"):
            return {...state, password: action.payload}
        case("CHANGE_PASSWORD_CONFIRM"):
            return {...state, passwordConfirm: action.payload}
        case("CHANGE_EMAIL"):
            return {...state, email: action.payload}
        case("CHANGE_EMAIL_CONFIRM"):
            return {...state, emailConfirm: action.payload}
        default:
            return state
    }

}

export default userReducer;