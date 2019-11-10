class JobActions {
    static JOBS = "JOBS";
    static JOBS_SUCCESSFULL = "JOBS_SUCCESSFULL";
    static JObS_FAILED = "JOBS_FAILED";

    static getJobs(data) {
        return {
            type: JobActions.JOBS,
            data
        }
    }

    static getJobsSuccessful(data) {
        return {
            type: JobActions.JOBS_SUCCESSFULL,
            data
        }
    }

    static getjobsFailed(data) {
        return {
            type: JobActions.JObS_FAILED,
            data
        }
    }

}

export default JobActions;