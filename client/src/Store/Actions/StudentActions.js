class StudentActions {
    static STUDENTS = "STUDENTS";
    static STUDENTS_SUCCESSFULL = "STUDENTS_SUCCESSFULL";
    static STUDENTS_FAILED = "STUDENTS_FAILED";

    static getStudents(data) {
        return {
            type: StudentActions.STUDENTS,
            data
        }
    }

    static getStudentsSuccessful(data) {
        return {
            type: StudentActions.STUDENTS_SUCCESSFULL,
            data
        }
    }

    static getStudentsFailed(data) {
        return {
            type: StudentActions.STUDENTS_FAILED,
            data
        }
    }

}

export default StudentActions;