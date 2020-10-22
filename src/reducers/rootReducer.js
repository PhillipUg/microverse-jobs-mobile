import { combineReducers } from 'redux'
import jobsReducer from './jobsReducer'
import userFavoritesReducer from './userFavoritesReducer';

const rootReducer = combineReducers({ jobs: jobsReducer, favorites: userFavoritesReducer })

export default rootReducer;