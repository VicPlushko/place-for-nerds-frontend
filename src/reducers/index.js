import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import tvShowReducer from './tvShowReducer'

const rootReducer = combineReducers({
    movieReducer,
    tvShowReducer
})

export default rootReducer