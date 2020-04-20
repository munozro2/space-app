import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducers from './errorsReducers';

export default combineReducers({
    auth: authReducer,
    errors: errorReducers
});