import {
    ADD_USER,
    USER_ERRORS,
    SET_LOADING
  } from "./types";
  
  
  // User registration
  export const addUser = user => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch("/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_USER,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: USER_ERRORS,
        payload: err.response.statusText
      });
    }
  };
  
  
  // Set loading to true
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  