import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import signinReducer from '../reducers/signinReducer';
import locataireReducer from '../reducers/locataireReducer';
import bienReducer from '../reducers/bienReducer';
import contextualMenuReducer from '../reducers/contextualMenuReducer';
import buttomNavReducer from '../reducers/buttomNavReducer';

const rootReducer = combineReducers(
    {
        signinState: signinReducer,
        locataireState: locataireReducer,
        bienState: bienReducer,
        contextualMenuState: contextualMenuReducer,
        buttomNavState: buttomNavReducer
    }
);

const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    } 
}

export default configureStore;