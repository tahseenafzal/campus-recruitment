import StudentActions from "../Actions/StudentActions";


class StudentMiddleware {

    static getStudents() {
        return dispatch => {
            dispatch(StudentActions.getStudents())
            fetch('http://localhost:5000/students/get-students')
                .then((resObj) => resObj.json())
                .then((res) => {
                    console.log(res);
                    
                    dispatch(StudentActions.getStudentsSuccessful(res))
                })
                .catch(() => {
                    dispatch(StudentActions.getStudentsFailed({ message: "Something Went Wrong" }))
                })
        }
    }

}


export default StudentMiddleware;