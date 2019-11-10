import JobActions from "../Actions/JobActions";
import { pending, apiResponded } from "./GeneralState";

const initialState = {
    isLoading: false,
    isErorr: false,
    errorMessage: '',
    jobs: []
};

function jobReducer(state = initialState, action) {
    switch (action.type) {
        case JobActions.JOBS:
            return {
                ...state,
                ...pending()
            }

        case JobActions.JOBS_SUCCESSFULL:
            console.log('action.data',action.data);
                
        return {
                ...state,
                ...apiResponded(false, ''),
                todos: action.data
            }


        case JobActions.JObS_FAILED:
            return {
                ...state,
                ...apiResponded(true, 'Something Went Wrong!!!'),
            }

        default:
            return state
    }
};

export default jobReducer;