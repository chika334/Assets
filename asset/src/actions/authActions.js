import axios from 'axios';
import { returnErrors } from './errorActions'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from '../actions/types';

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios.get('/api/users/auth', tokenConfig(getState))
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      });
    });
}

// Register User
export const register = ({ firstname, lastname, email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request body
  const body = JSON.stringify({ firstname, lastname, email, password });

  axios.post('/api/users', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL
      });
    });
}

// setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localStorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  // if token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
}