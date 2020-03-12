import bienConstants from '../constants/bienConstants';

const initialState = {
    biens: [],
    batiments: [],
    typeLogements: [],
    logements: [],
    logementsDetails: [],
    logementsCharacteristics: [],
    biensVisibility: 'flex',
    batimentsVisibility: 'none',
    logementsVisibility: 'none',
    typeLogementVisibility: 'none',
    logementVisibility: 'none',
    logementsDetailsVisibility: 'none',
    dossierLogementVisibility: 'none',
    selectedBatiment: '',
    selectedTypeLogement: '',
    batimentId: 0,
    typeLogementId: 0,
    reference: '',
    logementId: 0,
    biensMenubatiments: 'none',
    biensMenutypeLogements: 'none',
    biensMenulogements: 'none'
}

const bienReducer = (state = initialState, action) => {

    let nextState

    switch (action.type) {

        case bienConstants.SWITCH_TO_BIENS:

            nextState = {
                ...state,
                biensVisibility: action.biensVisibility,
                batimentsVisibility: action.batimentsVisibility,
                typeLogementVisibility: action.typeLogementVisibility,
                logementsVisibility: action.logementsVisibility,
                logementsDetailsVisibility: action.logementsDetailsVisibility,
                biensMenubatiments: 'none',
                biensMenutypeLogements: 'none',
                biensMenulogements: 'none'
            }

            return nextState || state

        case bienConstants.SWITCH_TO_BATIMENTS:

            nextState = {
                ...state,
                biensVisibility: action.biensVisibility,
                batimentsVisibility: action.batimentsVisibility,
                typeLogementVisibility: action.typeLogementVisibility,
                logementsVisibility: action.logementsVisibility,
                logementsDetailsVisibility: action.logementsDetailsVisibility,
                biensMenubatiments: 'flex',
                biensMenutypeLogements: 'none',
                biensMenulogements: 'none'
            }

            return nextState || state

        case bienConstants.SWITCH_TO_TYPE_LOGEMENTS:

            nextState = {
                ...state,
                biensVisibility: action.biensVisibility,
                batimentsVisibility: action.batimentsVisibility,
                typeLogementVisibility: action.typeLogementVisibility,
                logementsVisibility: action.logementsVisibility,
                logementsDetailsVisibility: action.logementsDetailsVisibility,
                biensMenubatiments: 'flex',
                biensMenutypeLogements: 'flex',
                biensMenulogements: 'none'
            }

            return nextState || state

        case bienConstants.SWITCH_TO_LOGEMENTS:

            nextState = {
                ...state,
                biensVisibility: action.biensVisibility,
                batimentsVisibility: action.batimentsVisibility,
                typeLogementVisibility: action.typeLogementVisibility,
                logementsVisibility: action.logementsVisibility,
                logementsDetailsVisibility: action.logementsDetailsVisibility,
                biensMenubatiments: 'flex',
                biensMenutypeLogements: 'flex',
                biensMenulogements: 'flex'
            }

            return nextState || state

        case bienConstants.SWITCH_TO_LOGEMENT_DETAIL:

            nextState = {
                ...state,
                biensVisibility: action.biensVisibility,
                batimentsVisibility: action.batimentsVisibility,
                typeLogementVisibility: action.typeLogementVisibility,
                logementsVisibility: action.logementsVisibility,
                logementsDetailsVisibility: action.logementsDetailsVisibility,
                biensMenubatiments: 'flex',
                biensMenutypeLogements: 'flex',
                biensMenulogements: 'flex'
            }

            return nextState || state

        case bienConstants.SWITCH_TO_DOSSIER_LOGEMENT:

            nextState = {
                ...state,
                biensVisibility: action.biensVisibility,
                batimentsVisibility: action.batimentsVisibility,
                typeLogementVisibility: action.typeLogementVisibility,
                logementsVisibility: action.logementsVisibility,
                logementsDetailsVisibility: action.logementsDetailsVisibility,
                dossierLogementVisibility: action.dossierLogementVisibility,
                biensMenubatiments: 'flex',
                biensMenutypeLogements: 'flex',
                biensMenulogements: 'flex'
            }

            return nextState || state

        case bienConstants.FETCH_BIENS:

            nextState = {
                ...state,
                biens: action.biens
            }

            return nextState || state

        case bienConstants.FETCH_BATIMENTS:

            nextState = {
                ...state,
                batiments: action.batiments
            }

            return nextState || state

        case bienConstants.FETCH_TYPE_LOGEMENTS:

            nextState = {
                ...state,
                typeLogements: action.typeLogements
            }

            return nextState || state

        case bienConstants.FETCH_LOGEMENTS:

            nextState = {
                ...state,
                logements: action.logements
            }

            return nextState || state

        case bienConstants.PASS_TYPE_LOGEMENT_PARAMS:

            nextState = {
                ...state,
                selectedBatiment: action.selectedBatiment,
                batimentId: action.batimentId
            }

            return nextState || state

        case bienConstants.PASS_LOGEMENT_PARAMS:

            nextState = {
                ...state,
                typeLogementId: action.typeLogementId,
                selectedTypeLogement: action.selectedTypeLogement
            }

            return nextState || state

        case bienConstants.PASS_LOGEMENT_DETAIL_PARAMS:

            nextState = {
                ...state,
                reference: action.reference,
                logementId: action.logementId
            }

            return nextState || state

        case bienConstants.FETCH_CHARACTERISTIQUES_LOGEMENTS:

            nextState = {
                ...state,
                logementsCharacteristics: action.logementsCharacteristics,
            }

            return nextState || state

        case bienConstants.FETCH_LOGEMENT_DETAIL:

            nextState = {
                ...state,
                logementsDetails: action.logementsDetails,
            }

            return nextState || state

        default:
            return state;
    }
}

export default bienReducer;