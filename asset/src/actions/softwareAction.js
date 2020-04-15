import axios from 'axios';
import {
  GET_ITEMS,
  ADD_ITEM,
  ITEMS_LOADING
} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => (dispatch, getState) => {
  dispatch(setItemsLoading());

  axios.get('http://localhost:5000/api/software')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addItem = (software) => (dispatch, getState) => {

  axios.post('http://localhost:5000/api/software', software, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};