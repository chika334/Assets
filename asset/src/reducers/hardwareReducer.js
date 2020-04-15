import {
  GET_ITEMS,
  ADD_ITEM,
  ITEMS_LOADING
} from '../actions/types';

const initialState = {
  hardware: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        hardware: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        hardware: [action.payload, ...state.hardware],
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