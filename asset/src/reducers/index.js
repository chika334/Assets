import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import itemReducers from './itemReducers';
import softwareReducer from './softwareReducer';
import hardwareReducer from './hardwareReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  item: itemReducers,
  software: softwareReducer,
  hardware: hardwareReducer
})