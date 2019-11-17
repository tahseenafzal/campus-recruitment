import {
    ADD_USER,
    USER_ERRORS,
    SET_LOADING
  } from "./types";
  
  
  // User registration
  export const addUser = user => async dispatch => {
    try {  
      setLoading();
      const res = await fetch("http://localhost:5000/api/v1/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      const data = await res.json();
      // console.log('Data from response:', data.messae);
      if(data.success){
        dispatch({
          type: ADD_USER,
          payload: data
        });
      }else{
        dispatch({
          type: USER_ERRORS,
          payload: data.message
        });
      }
    } catch (err) {
      dispatch({
        type: USER_ERRORS,
        payload: err.message
      });
    }
  };
  
  
  
  // Set loading to true
  export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  