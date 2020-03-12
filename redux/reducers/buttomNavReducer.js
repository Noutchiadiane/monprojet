import buttomNavConstants from '../constants/buttomNavConstants';

const initialState = {

    val: 1,
    Tdb: 'flex',
    Biens: 'none',
    Locataires: 'none',
    Loyers: 'none',
    Cdb: 'none',
    Penalites: 'none',
    Index: 'none',
    Etat: 'none'
}

const buttomNavReducer = (state = initialState, action) => {

    let nextState

    switch (action.type) {

        case buttomNavConstants.DISPLAY_TDB:

            nextState = {
                ...state,
                val: 1,
                Tdb: 'flex',
                Biens: 'none',
                Locataires: 'none',
                Loyers: 'none',
                Cdb: 'none',
                Penalites: 'none',
                Index: 'none',
                Etat: 'none'
            }

            return nextState || state

            case buttomNavConstants.DISPLAY_BIENS:

            nextState = {
                ...state,
                val: 2,
                Tdb: 'none',
                Biens: 'flex',
                Locataires: 'none',
                Loyers: 'none',
                Cdb: 'none',
                Penalites: 'none',
                Index: 'none',
                Etat: 'none'
            }

            return nextState || state

            case buttomNavConstants.DISPLAY_LOCATAIRES:

            nextState = {
                ...state,
                val: 3,
                Tdb: 'none',
                Biens: 'none',
                Locataires: 'flex',
                Loyers: 'none',
                Cdb: 'none',
                Penalites: 'none',
                Index: 'none',
                Etat: 'none'
            }

            return nextState || state

            case buttomNavConstants.DISPLAY_LOYERS:

            nextState = {
                ...state,
                val: 4,
                Tdb: 'none',
                Biens: 'none',
                Locataires: 'none',
                Loyers: 'flex',
                Cdb: 'none',
                Penalites: 'none',
                Index: 'none',
                Etat: 'none'
            }

            return nextState || state

            case buttomNavConstants.DISPLAY_CDB:

            nextState = {
                ...state,
                val: 5,
                Tdb: 'none',
                Biens: 'none',
                Locataires: 'none',
                Loyers: 'none',
                Cdb: 'flex',
                Penalites: 'none',
                Index: 'none',
                Etat: 'none'
            }

            return nextState || state

            case buttomNavConstants.DISPLAY_PENALITES:

            nextState = {
                ...state,
                val: 6,
                Tdb: 'none',
                Biens: 'none',
                Locataires: 'none',
                Loyers: 'none',
                Cdb: 'none',
                Penalites: 'flex',
                Index: 'none',
                Etat: 'none'
            }

            return nextState || state

            case buttomNavConstants.DISPLAY_INDEX:

            nextState = {
                ...state,
                val: 7,
                Tdb: 'none',
                Biens: 'none',
                Locataires: 'none',
                Loyers: 'none',
                Cdb: 'none',
                Penalites: 'none',
                Index: 'flex',
                Etat: 'none'
            }

            return nextState || state

            case buttomNavConstants.DISPLAY_ETAT:

            nextState = {
                ...state,
                val: 8,
                Tdb: 'none',
                Biens: 'none',
                Locataires: 'none',
                Loyers: 'none',
                Cdb: 'none',
                Penalites: 'none',
                Index: 'none',
                Etat: 'flex'
            }

            return nextState || state



        default:
            return state;
    }
}

export default buttomNavReducer;