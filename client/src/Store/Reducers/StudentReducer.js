import {
    GET_STUDENTS,
    ADD_STUDENT,
    DELETE_STUDENT,
    SET_LOADING,
    STUDENTS_ERROR
  } from '../Actions/types';
  
  const initialState = {
    students: [],
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_STUDENTS:
        return {
          ...state,
          students: action.payload,
          loading: false
        };
      case ADD_STUDENT:
        return {
          ...state,
          students: [...state.students, action.payload],
          loading: false
        };
      case DELETE_STUDENT:
        return {
          ...state,
          students: state.students.filter(student => student.id !== action.payload),
          loading: false
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case STUDENTS_ERROR:
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