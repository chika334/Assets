import {LOGGED_IN, REGISTERED} from './types';
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