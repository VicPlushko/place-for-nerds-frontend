import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import tvShowReducer from './tvShowReducer'
import reviewReducer from './reviewReducer'

const rootReducer = combineReducers({
    movieReducer,
    tvShowReducer,
    reviewReducer
})

export default rootReducer