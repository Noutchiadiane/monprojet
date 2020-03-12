import signinConstants from '../constants/signinConstants';

const initialState = {

    backClickCount: 0,
    hidePassword: true,
    hideEye: 'none',
    showEye: 'flex',    
    bailleurWidth: 2,
    bailleurIcon: 'flex',
    locataireWidth: 0,
    locataireIcon: 'none'
}

const signinReducer = (state = initialState, action) => {

    let nextState

    switch (action.type) {

        case signinConstants.USERNAME_CHANGE:

            nextState = {
                ...state,
                username: action.value
            }

            return nextState || state


        default:
            return state;
    }
}

export default signinReducer;