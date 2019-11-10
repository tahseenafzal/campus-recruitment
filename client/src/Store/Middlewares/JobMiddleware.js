import JobActions from "../Actions/JobActions";


class JobMiddleware {

    static getJobs() {
        return dispatch => {
            dispatch(JobActions.getJobs())
            fetch('http://localhost:5000/students/get-jobs')
                .then((resObj) => resObj.json())
                .then((res) => {
                    console.log(res);
                    
                    dispatch(JobActions.getJobsSuccessful(res))
                })
                .catch(() => {
                    dispatch(JobActions.getStudentsFailed({ message: "Something Went Wrong" }))
                })
        }
    }

}


export default JobMiddleware;