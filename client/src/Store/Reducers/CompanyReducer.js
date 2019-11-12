import {
    GET_COMPANIES,
    ADD_COMPANY,
    DELETE_COMPANY,
    COMPANIES_ERROR,
    SET_LOADING,
  } from '../Actions/types';
  
  const initialState = {
    companies: null,
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_COMPANIES:
        return {
          ...state,
          companies: action.payload,
          loading: false
        };
      case ADD_COMPANY:
        return {
          ...state,
          companies: [...state.companies, action.payload],
          loading: false
        };
      case DELETE_COMPANY:
        return {
          ...state,
          companies: state.companies.filter(company => company.id !== action.payload),
          loading: false
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case COMPANIES_ERROR:
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