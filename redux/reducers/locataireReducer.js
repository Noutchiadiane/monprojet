import locataireConstants from '../constants/locataireConstants';

const initialState = {
    locataires: [],
    loyers: [],
    comptes: [],
    depots: [],
    charges: [],
    occupations: [],
    consoElectricite: [],
    consoEau: [],
    fetching_data: false,
    pageSize: 10,
    listHabitant: 'flex',
    habitantNom: '',
    occupationID: '',
    habitantID: '',
    logementHabitant: '',
    showDossierHabitant: 'none'
}

const locataireReducer = (state = initialState, action) => {

    let nextState

    switch (action.type) {

        case locataireConstants.FETCH_LOCATAIRES:

            nextState = {
                ...state,
                locataires: action.locataires
            }

            return nextState || state

        case locataireConstants.FETCH_OCCUPATION_BY_HABITANT:

            nextState = {
                ...state,
                habitantID: action.habitantId,
                habitantNom: action.habitantNom,
                listHabitant: action.listHabitant,
                showDossierHabitant: action.showDossierHabitant,
                occupationID: action.occupationID,
                logementHabitant: action.logementHabitant
            }

            return nextState || state

            case locataireConstants.SHOW_LOCATAIRE_LIST:

            nextState = {
                ...state,                
                listHabitant: action.listHabitant,
                showDossierHabitant: action.showDossierHabitant               
            }

            return nextState || state


        default:
            return state;
    }
}

export default locataireReducer;