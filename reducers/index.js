import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'

const reducers ={
    authReducer,
    form: formReducer
};
export default combineReducers(reducers);
