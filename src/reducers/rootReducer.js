import jobsReducer from './jobsReducer'
import filterReducer from './filterReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ jobsReducer, filterReducer })

export default rootReducer;