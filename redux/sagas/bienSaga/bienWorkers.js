import { call, put } from 'redux-saga/effects';
import bienConstants from '../../constants/bienConstants';
import * as bienService from '../../../services/localeService/bienService';

export function* fetchBienWorker() {
    try{
        const response = yield call(bienService.fetchBiens)

        console.log(response)

        yield put({type:bienConstants.FETCH_BIENS_SUCCESS, response})
    
    } catch (error) {
        
        yield put({type: bienConstants.FETCH_BIENS_ERROR, error})

    }
}
