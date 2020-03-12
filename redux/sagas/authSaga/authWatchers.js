import { takeLatest } from 'redux-saga/effects';
import * as authWorkers from './authWorkers';
import signinConstants from '../../constants/signinConstants';

export function* watchSignIn() {
    yield takeLatest(signinConstants.SIGN_IN, authWorkers.signinWorker);
}