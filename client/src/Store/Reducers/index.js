import { combineReducers } from 'redux';
import studentReducer from './StudentReducer';
import companyReducer from './CompanyReducer';
import jobReducer from './JobReducer';

const rootReducer = combineReducers({
    studentReducer,
    companyReducer,
    jobReducer
});


export default rootReducer;