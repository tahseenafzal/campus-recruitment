import {
    GET_JOBS,
    ADD_JOB,
    DELETE_JOB,
    JOBS_ERROR,
    SET_LOADING,
    UPDATE_JOB,
    SEARCH_JOBS
  } from './types';
  
  // Get jobs from server
  export const getJobs = () => async dispatch => {
    
    try {
      setLoading();
      const res = await fetch('http://localhost:5000/api/v1/jobs/get-jobs');
      const data = await res.json();
      dispatch({
        type: GET_JOBS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err.message
      });
    }
  };
  
  // Add job to server
  export const addJob = job => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('http://localhost:5000/api/v1/jobs/create-job', {
        method: 'POST',
        body: JSON.stringify(job),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log('this is job add action:',data)
      dispatch({
        type: ADD_JOB,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
        payload: err.message
      });
    }
  };

   // Update job on server
export const updateJob = job => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/update-job/${job.id}`, {
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
      payload: err.message
    });
  }
};

// Search server jobs
export const searchJob = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/get-jobs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_JOBS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: JOBS_ERROR,
      payload: err.message
    });
  }
};



  // delete job from server  
  export const deleteJob = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`http://localhost:5000/api/v1/jobs/delete-job/${id}`, {
        method: 'DELETE'
      });
  
      dispatch({
        type: DELETE_JOB,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: JOBS_ERROR,
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