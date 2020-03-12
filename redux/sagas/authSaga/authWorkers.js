import { call, put } from 'redux-saga/effects';
import signinConstants from '../../constants/signinConstants';
import * as authService from '../../../services/localeService/authService';

export function* signinWorker(user) {
    try{
        const response = yield call(authService.signin, user)

        yield put({type:signinConstants.SIGN_IN_SUCCESS, response})
    
    } catch (error) {
        
        yield put({type: signinConstants.SIGN_IN_ERROR, error})

    }
}