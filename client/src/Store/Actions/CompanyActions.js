class CompanyActions {
    static COMPANYS = "COMPANYS";
    static COMPANYS_SUCCESSFULL = "COMAPANY_SUCCESSFULL";
    static COMPANYS_FAILED = "COMPANY_FAILED";

    static getCompanies(data) {
        return {
            type: CompanyActions.COMPANYS,
            data
        }
    }

    static getCompaniesSuccessful(data) {
        return {
            type: CompanyActions.COMPANY_SUCCESSFULL,
            data
        }
    }

    static getCompaniesFailed(data) {
        return {
            type: CompanyActions.COMPANY_FAILED,
            data
        }
    }

}

export default CompanyActions;