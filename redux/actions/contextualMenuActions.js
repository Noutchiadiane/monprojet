import contextualMenuConstants from '../constants/contextualMenuConstants'

export function showMenu() {
    return {
        type: contextualMenuConstants.SHOW_MENU
    }
}

export function hideMenu() {
    return {
        type: contextualMenuConstants.HIDE_MENU        
    }
}
 
export function showDossierHabitantDrawerMenu() {
    return {
        type: contextualMenuConstants.SHOW_DOSSIER_HABITANT_DRAWER_MENU        
    }
}

export function hideDossierHabitantDrawerMenu() {
    return {
        type: contextualMenuConstants.HIDE_DOSSIER_HABITANT_DRAWER_MENU        
    }
}

export function isBiens() {
    return {
        type: contextualMenuConstants.IS_BIENS        
    }
}

export function isBatiments() {
    return {
        type: contextualMenuConstants.IS_BATIMENTS        
    }
}

export function isTypeLogements() {
    return {
        type: contextualMenuConstants.IS_TYPE_LOGEMENTS        
    }
}

export function isLogements() {
    return {
        type: contextualMenuConstants.IS_LOGEMENT        
    }
}

export function isLogementDetails() {
    return {
        type: contextualMenuConstants.IS_LOGEMENT_DETAIL        
    }
}