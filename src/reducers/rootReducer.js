import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import favoritesReducer from './favoritesReducer';
import jobDetailsReducer from './jobDetailsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  jobs: jobsReducer, favorites: favoritesReducer, job: jobDetailsReducer, auth: authReducer,
});

export default rootReducer;
