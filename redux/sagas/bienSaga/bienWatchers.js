import { takeLatest } from 'redux-saga/effects';
import * as bienWorkers from './bienWorkers';
import bienConstants from '../../constants/bienConstants';

export function* watchFetchBiens() {
    yield takeLatest(bienConstants.FETCH_BIENS, bienWorkers.fetchBienWorker);
}
