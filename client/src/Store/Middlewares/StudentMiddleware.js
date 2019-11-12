// import StudentActions from "../Actions/StudentActions";
// import { GET_STUDENTS, STUDENTS_ERROR } from "../Actions/types";

// // Get techs from server
// export const getStudents = () => async dispatch => {
//     try {
//       setLoading();
  
//       const res = await fetch('/get-students');
//       const data = await res.json();
  
//       dispatch({
//         type: GET_STUDENTS,
//         payload: data
//       });
//     } catch (err) {
//       dispatch({
//         type: STUDENTS_ERROR,
//         payload: err.response.statusText
//       });
//     }
//   };


// export default StudentMiddleware;