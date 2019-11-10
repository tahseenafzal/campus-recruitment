import StudentActions from "../Actions/StudentActions";
import { pending, apiResponded } from "./GeneralState";

const initialState = {
    isLoading: false,
    isErorr: false,
    errorMessage: '',
    students: []
};

function studentReducer(state = initialState, action) {
    switch (action.type) {
        case StudentActions.STUDENTS:
            return {
                ...state,
                ...pending()
            }

        case StudentActions.STUDENTS_SUCCESSFULL:
            console.log('action.data',action.data);
                
        return {
                ...state,
                ...apiResponded(false, ''),
                todos: action.data
            }


        case StudentActions.STUDENTS_FAILED:
            return {
                ...state,
                ...apiResponded(true, 'Something Went Wrong!!!'),
            }

        default:
            return state
    }
};

export default studentReducer;