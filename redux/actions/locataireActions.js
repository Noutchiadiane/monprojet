import locataireConstants from '../constants/locataireConstants'

export function fetchLocataires(locataires) {
    return {
        type: locataireConstants.FETCH_LOCATAIRES,
        locataires
    }
}

export function fetchOccupationByHabitant(habitantId, habitantNom,
    listHabitant, showDossierHabitant, occupationID, logementHabitant) {
    return {
        type: locataireConstants.FETCH_OCCUPATION_BY_HABITANT,
        habitantId, 
        habitantNom,
        listHabitant, 
        showDossierHabitant, 
        occupationID, 
        logementHabitant
    }
}

export function showLocataireList(listHabitant,showDossierHabitant) {
    return {
        type: locataireConstants.SHOW_LOCATAIRE_LIST,
        listHabitant,
        showDossierHabitant
    }
}
