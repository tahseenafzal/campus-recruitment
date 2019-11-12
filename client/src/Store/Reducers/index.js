import { combineReducers } from 'redux';
import studentReducer from './StudentReducer';
import companyReducer from './CompanyReducer';
import jobReducer from './JobReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    student: studentReducer,
    company: companyReducer,
    job: jobReducer,
    user: UserReducer
});


export default rootReducer;