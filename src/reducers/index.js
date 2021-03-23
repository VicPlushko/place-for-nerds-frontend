import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import tvShowReducer from './tvShowReducer'
import reviewReducer from './reviewReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    movieReducer,
    tvShowReducer,
    reviewReducer,
    userReducer
})

export default rootReducer