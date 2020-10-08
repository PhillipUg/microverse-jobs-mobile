import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({ jobsReducer, filterReducer });

export default rootReducer;
