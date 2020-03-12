import bienConstants from '../constants/bienConstants';

export function switchToBiens() {
    return {
        type: bienConstants.SWITCH_TO_BIENS,
        biensVisibility: 'flex',
        batimentsVisibility: 'none',
        logementsVisibility: 'none',
        typeLogementVisibility: 'none',
        logementsDetailsVisibility: 'none'
    }
}

export function switchToBatiments() {
    return {
        type: bienConstants.SWITCH_TO_BATIMENTS,
        biensVisibility: 'none',
        batimentsVisibility: 'flex',
        logementsVisibility: 'none',
        typeLogementVisibility: 'none',
        logementsDetailsVisibility: 'none'
    }
}

export function switchToLogements() {
    return {
        type: bienConstants.SWITCH_TO_LOGEMENTS,
        biensVisibility: 'none',
        batimentsVisibility: 'none',
        logementsVisibility: 'flex',
        typeLogementVisibility: 'none',
        logementsDetailsVisibility: 'none'
    }
}

export function switchToTypeLogements() {
    return {
        type: bienConstants.SWITCH_TO_TYPE_LOGEMENTS,
        biensVisibility: 'none',
        batimentsVisibility: 'none',
        logementsVisibility: 'none',
        typeLogementVisibility: 'flex',
        logementsDetailsVisibility: 'none',
    }
}

export function switchToLogementsDetail() {
    return {
        type: bienConstants.SWITCH_TO_LOGEMENT_DETAIL,
        biensVisibility: 'none',
        batimentsVisibility: 'none',
        logementsVisibility: 'none',
        typeLogementVisibility: 'none',
        logementsDetailsVisibility: 'flex'
    }
}

export function switchToDossierLogement() {
    return {
        type: bienConstants.SWITCH_TO_DOSSIER_LOGEMENT,
        biensVisibility: 'none',
        batimentsVisibility: 'none',
        logementsVisibility: 'none',
        typeLogementVisibility: 'none',
        logementsDetailsVisibility: 'none',
        dossierLogementVisibility: 'flex'
    }
}

export function fetchBiens(biens) {
    return {
        type: bienConstants.FETCH_BIENS,
        biens
    }
}

export function fetchBatiments(batiments) {
    return {
        type: bienConstants.FETCH_BATIMENTS,
        batiments
    }
}

export function fetchTypeLogements(typeLogements) {
    return {
        type: bienConstants.FETCH_TYPE_LOGEMENTS,
        typeLogements
    }
}

export function fetchLogements(logements) {
    return {
        type: bienConstants.FETCH_LOGEMENTS,
        logements
    }
}

export function passTypeLogementParams(batimentId, selectedBatiment) {
    return {
        type: bienConstants.PASS_TYPE_LOGEMENT_PARAMS,
        batimentId,
        selectedBatiment
    }
}

export function passLogementParams(typeLogementId, selectedTypeLogement) {
    return {
        type: bienConstants.PASS_LOGEMENT_PARAMS,
        typeLogementId,
        selectedTypeLogement
    }
}

export function passLogementDetailParams(reference, logementId) {
    return {
        type: bienConstants.PASS_LOGEMENT_DETAIL_PARAMS,
        reference,
        logementId
    }
}

export function fetchCharacteristiquesLogements(logementsCharacteristics) {
    return {
        type: bienConstants.FETCH_CHARACTERISTIQUES_LOGEMENTS,
        logementsCharacteristics
    }
}

export function fetchLogementDetail(logementsDetails) {
    return {
        type: bienConstants.FETCH_LOGEMENT_DETAIL,
        logementsDetails
    }
}