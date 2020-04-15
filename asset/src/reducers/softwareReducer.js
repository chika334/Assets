import {
  GET_ITEMS,
  ADD_ITEM,
  ITEMS_LOADING
} from '../actions/types';

const initialState = {
  software: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        software: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        software: [action.payload, ...state.software],
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}