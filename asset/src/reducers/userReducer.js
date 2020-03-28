import {
  LOGGED_IN,
  REGISTERED,
  AUTH_USER,
  // LOGOUT_USER,
} from '../actions/types';


export default function(state={},action){
  switch(action.type){
    case REGISTERED:
      return {...state, register: action.payload }
    case LOGGED_IN:
      return { ...state, loginSuccess: action.payload }
    case AUTH_USER:
      return {...state, userData: action.payload }
    // case LOGOUT_USER:
    //   return {...state }
    default:
      return state;
  }
}