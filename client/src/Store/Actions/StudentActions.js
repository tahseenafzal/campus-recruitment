import {
    GET_STUDENTS,
    ADD_STUDENT,
    DELETE_STUDENT,
    UPDATE_STUDENT,
    SEARCH_STUDENTS,
    SET_LOADING,
    STUDENTS_ERROR
  } from './types';
  
  // Get students from server
  export const getStudents = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/get-students');
      const data = await res.json();
  
      dispatch({
        type: GET_STUDENTS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: STUDENTS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Add student to server
  export const addStudent = student => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/create-student', {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_STUDENT,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: STUDENTS_ERROR,
        payload: err.response.statusText
      });
    }
  };

  // Update student on server
export const updateStudent = student => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/update-student/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_STUDENT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: STUDENTS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server students
export const searchStudent = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/get-students?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_STUDENTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: STUDENTS_ERROR,
      payload: err.response.statusText
    });
  }
};


  // delete student from server  
  export const deleteStudent = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`/delete-student/${id}`, {
        method: 'DELETE'
      });
  
      dispatch({
        type: DELETE_STUDENT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: STUDENTS_ERROR,
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