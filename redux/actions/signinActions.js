import signinConstants from '../constants/signinConstants'

export function usernameChange(username) {
    return {
        type: signinConstants.USERNAME_CHANGE,
        username
    }
}

export function passwordChange(password) {
    return {
        type: signinConstants.PASSWORD_CHANGE,
        password
    }
}

export function passwordVisibilityChange() {
    return {
        type: signinConstants.PASSWORD_VISIBILITY_CHANGE
    }
}

export function accountTypeChange(value) {
    return {
        type: signinConstants.ACCOUNT_TYPE_CHANGE,
        value
    }
}

export function onSignin(user) {
    return {
        type: signinConstants.SIGN_IN,
        user
    }
}