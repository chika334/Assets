import {LOGGED_IN, REGISTERED, AUTH_USER} from './types';
import axios from 'axios';

export function register(user) {
  const request = axios.post('http://localhost:5000/api/users', user)
    .then(response => response.data);

  return {
    type: REGISTERED,
    payload: request
  }
}

export function login(user){
  const request = axios.post('http://localhost:5000/api/login', user)
    .then(response => response.data)

  return {
    type: LOGGED_IN,
    payload: request
  }
}

export function auth(){
  const request = axios.get(`http://localhost:5000/api/users/auth`)
  .then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request
  }
}

// export function admin(){
//   const request = axios.get(`http://localhost:5000/api/users/me`)
//   // const request = axios.get(`${USER_SERVER}/admin`)
//   .then(response => response.data);

//   return {
//       type: ADMIN_USER,
//       payload: request
//   }
// }

// export function logoutUser(){
//   const request = axios.get(`http://localhost:5000/api/users/logout`)
//   // const request = axios.get(`${USER_SERVER}/logout`)
//   .then(response => response.data);

//   return {
//       type: LOGOUT_USER,
//       payload: request
//   }
// }
