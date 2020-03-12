import { fork, all } from 'redux-saga/effects';
import * as authWatchers from './authSaga/authWatchers';
import * as bienWatchers from './bienSaga/bienWatchers';

export default function* rootSaga() {
    yield all([
        ...Object.values(authWatchers),
        ...Object.values(bienWatchers),
    ].map(fork));
} 