import {
    GET_JOBS,
    ADD_JOB,
    DELETE_JOB,
    JOBS_ERROR,
    SET_LOADING,
    UPDATE_JOB
  } from './types';
  
  // Get jobs from server
  export const getJobs = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/get-jobs');
      const data = await res.json();
  
      dispatch({
        type: GET_JOBS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
  // Add job to server
  export const addJob = job => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/create-job', {
        method: 'POST',
        body: JSON.stringify(job),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_JOB,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err.response.statusText
      });
    }
  };

   // Update job on server
export const updateJob = job => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/update-job/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(job),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_JOB,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server jobs
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



  // delete job from server  
  export const deleteJob = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`/delete-job/${id}`, {
        method: 'DELETE'
      });
  
      dispatch({
        type: DELETE_JOB,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
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