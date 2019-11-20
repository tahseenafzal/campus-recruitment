import {
    GET_JOBS,
    ADD_JOB,
    DELETE_JOB,
    JOBS_ERROR,
    SET_LOADING
  } from '../Actions/types';
  
  const initialState = {
    jobs: [],
    loading: true,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_JOBS:
        console.log('tehseen ',action.payload);
        return {
          ...state,
          jobs: action.payload,
          loading: false
        };
      case ADD_JOB:
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
          loading: false
        };
      case DELETE_JOB:
        return {
          ...state,
          jobs: state.jobs.filter(job => job.id !== action.payload),
          loading: false
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case JOBS_ERROR:
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