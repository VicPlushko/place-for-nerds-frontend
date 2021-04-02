export const createUser = (userData) => {
    return dispatch => {
        dispatch({type: "CREATE_USER", payload: userData})
    }
}

export const loginUser = (userData) => {
    return dispatch => {
        dispatch({type: "LOGIN_USER", payload: userData})
    }
}

export const changeUsername = (value) => {
    return dispatch => {
        dispatch({type: "CHANGE_USERNAME", payload: value})
    }
}

export const changeEmail = (value) => {
    return dispatch => {
        dispatch({type: "CHANGE_EMAIL", payload: value})
    }
}

export const changeEmailConfirm = (value) => {
    return dispatch => {
        dispatch({type: "CHANGE_EMAIL_CONFIRM", payload: value})
    }
}

export const changePassword = (value) => {
    return dispatch => {
        dispatch({type: "CHANGE_PASSWORD", payload: value})
    }
}

export const changePasswordConfirm = (value) => {
    return dispatch => {
        dispatch({type: "CHANGE_PASSWORD_CONFIRM", payload: value})
    }
}

