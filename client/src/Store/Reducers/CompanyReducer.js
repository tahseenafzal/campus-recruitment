import CompanyActions from "../Actions/CompanyActions";
import { pending, apiResponded } from "./GeneralState";

const initialState = {
    isLoading: false,
    isErorr: false,
    errorMessage: '',
    companies: []
};

function companyReducer(state = initialState, action) {
    switch (action.type) {
        case ComopanyActions.STUDENTS:
            return {
                ...state,
                ...pending()
            }

        case CompanyActions.COMPANYS_SUCCESSFULL:
            console.log('action.data',action.data);
                
        return {
                ...state,
                ...apiResponded(false, ''),
                todos: action.data
            }


        case CompanyActions.COMPANYS_FAILED:
            return {
                ...state,
                ...apiResponded(true, 'Something Went Wrong!!!'),
            }

        default:
            return state
    }
};

export default companyReducer;