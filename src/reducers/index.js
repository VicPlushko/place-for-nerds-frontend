import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import tvShowReducer from './tvShowReducer'
import reviewReducer from './reviewReducer'
import userReducer from './userReducer'
import tvShowReviewReducer from './tvShowReviewReducer'

const rootReducer = combineReducers({
    movieReducer,
    reviewReducer,
    tvShowReducer,
    tvShowReviewReducer,
    userReducer,
})

export default rootReducer