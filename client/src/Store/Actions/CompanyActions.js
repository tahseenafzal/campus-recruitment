import {
  GET_COMPANIES,
  ADD_COMPANY,
  DELETE_COMPANY,
  SET_LOADING,
  UPDATE_COMPANY,
  SEARCH_COMPANIES,
  COMPANIES_ERROR
} from "./types";

// Get companies from server
export const getCompanies = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/get-companies");
    const data = await res.json();

    dispatch({
      type: GET_COMPANIES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COMPANIES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add company to server
export const addCompany = company => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/create-company", {
      method: "POST",
      body: JSON.stringify(company),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_COMPANY,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COMPANIES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update company on server
export const updateCompany = company => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/update-company/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(company),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_COMPANY,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COMPANIES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server companies
export const searchCompanies = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/get-companies?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_COMPANIES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: COMPANIES_ERROR,
      payload: err.response.statusText
    });
  }
};

// delete company from server
export const deleteCompany = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/delete-company/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_COMPANY,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: COMPANIES_ERROR,
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
