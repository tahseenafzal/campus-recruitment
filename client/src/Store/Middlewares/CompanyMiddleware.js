import CompanyActions from "../Actions/CompanyActions";


class CompanyMiddleware {

    static getCompanies() {
        return dispatch => {
            dispatch(CompanyActions.getCompanies())
            fetch('http://localhost:5000/students/get-companies')
                .then((resObj) => resObj.json())
                .then((res) => {
                    console.log(res);
                    
                    dispatch(CompanyActions.getCompaniesSuccessful(res))
                })
                .catch(() => {
                    dispatch(CompanyActions.getCompaniesFailed({ message: "Something Went Wrong" }))
                })
        }
    }

}


export default CompanyMiddleware;