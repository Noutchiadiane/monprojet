import contextualMenuActions from '../constants/contextualMenuConstants';

const initialState = {
    menuShow: 'none',
    menuHide: 'flex',
    blurView: 1,
    isDossierHabitant: false,
    drawerPosition: 'absolute',
    isClickable: false,
    isBiens: true,
    isBatiments: false,
    isTypeLogements: false,
    isLogement: false,
    isLogementDetail: false
}

const contextualMenuReducer = (state = initialState, action) => {

    let nextState

    switch (action.type) {

        case contextualMenuActions.SHOW_MENU:

            nextState = {
                ...state,
                menuShow: 'flex',
                menuHide: 'none',
                blurView: 0.3,
                drawerPosition: 'relative',
                isClickable: true,
            }

            return nextState || state

        case contextualMenuActions.HIDE_MENU:

            nextState = {
                ...state,
                menuShow: 'none',
                menuHide: 'flex',
                blurView: 1,
                drawerPosition: 'absolute',
                isClickable: false,
            }

            return nextState || state

        case contextualMenuActions.SHOW_DOSSIER_HABITANT_DRAWER_MENU:

            nextState = {
                ...state,
                isDossierHabitant: true
            }

            return nextState || state

        case contextualMenuActions.HIDE_DOSSIER_HABITANT_DRAWER_MENU:

            nextState = {
                ...state,
                isDossierHabitant: false
            }

            return nextState || state

        case contextualMenuActions.IS_BIENS:

            nextState = {
                ...state,
                isBiens: true,
                isBatiments: false,
                isTypeLogements: false,
                isLogement: false,
                isLogementDetail: false
            }

            return nextState || state

        case contextualMenuActions.IS_BATIMENTS:

            nextState = {
                ...state,
                isBiens: false,
                isBatiments: true,
                isTypeLogements: false,
                isLogement: false,
                isLogementDetail: false
            }

            return nextState || state

        case contextualMenuActions.IS_TYPE_LOGEMENTS:

            nextState = {
                ...state,
                isBiens: false,
                isBatiments: false,
                isTypeLogements: true,
                isLogement: false,
                isLogementDetail: false
            }

            return nextState || state

        case contextualMenuActions.IS_LOGEMENT:

            nextState = {
                ...state,
                isBiens: false,
                isBatiments: false,
                isTypeLogements: false,
                isLogement: true,
                isLogementDetail: false
            }

            return nextState || state

        case contextualMenuActions.IS_LOGEMENT_DETAIL:

            nextState = {
                ...state,
                isBiens: false,
                isBatiments: false,
                isTypeLogements: false,
                isLogement: false,
                isLogementDetail: true
            }

            return nextState || state


        default:
            return state;
    }
}

export default contextualMenuReducer;