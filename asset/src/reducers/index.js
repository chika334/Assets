import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import itemReducers from './itemReducers'

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  item: itemReducers
})