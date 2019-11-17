import {
    ADD_USER,
    USER_ERRORS,
    SET_LOADING
  } from '../Actions/types';
  
  const initialState = {
    users: [],
    loading: false,
    error: '',
    success: false
  };
  
  export default (state = initialState, action) => {
    console.log('action data',state)
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          users: [...state.users, ...action.payload],
          success: true,
          loading: false
          // errorMessage: action.payload
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case USER_ERRORS:
        console.error('user errors: ',action.payload);
        return {
          // ...state,
          error: action.payload,
          loading: false
        };
      default:
        return state;
    }
  };