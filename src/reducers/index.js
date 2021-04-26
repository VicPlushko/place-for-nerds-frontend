import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import tvShowReducer from './tvShowReducer'
import reviewReducer from './reviewReducer'
import userReducer from './userReducer'
import tvShowReviewReducer from './tvShowReviewReducer'
import gameReducer from './gameReducer'

const rootReducer = combineReducers({
    movieReducer,
    reviewReducer,
    tvShowReducer,
    tvShowReviewReducer,
    userReducer,
    gameReducer
})

export default rootReducer