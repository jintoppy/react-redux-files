import {combineReducers} from 'redux';
import employee from './employee';

const AppReducer = combineReducers({
    employee: employee
});

export default AppReducer;


