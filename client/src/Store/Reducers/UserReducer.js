import {
    ADD_USER,
    USER_ERRORS,
    SET_LOADING
  } from '../Actions/types';
  
  const initialState = {
    users: null,
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
          loading: false
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case USER_ERRORS:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };