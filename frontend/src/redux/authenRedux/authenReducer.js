import { 
    LOGIN_FAILURE,
    LOGIN_SUCCESS, 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS, 
    SET_CURRENT_AUTHEN_PAGE, 
    LOGOUT
} from "./authenTypes"

let user = JSON.parse(localStorage.getItem('user')) ?? {};

const initState = {
    registerSuccess: false,
    loginSuccess: false,
    isRegistering: false,
    failureMsg: '',
    user: user
}

// const initialState = user ? { loggedIn: true, user } : {};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case SET_CURRENT_AUTHEN_PAGE:
            return {
                ...state,
                isRegistering: !state.isRegistering
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true,
                failureMsg: '',
                user: action.payload
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registerSuccess: false,
                failureMsg: action.payload,
                user: {}
            }
        case LOGIN_SUCCESS:
            return {
                ...state, 
                loginSuccess: true,
                failureMsg: '',
                user: action.payload
            }
        case LOGIN_FAILURE: 
            return {
                ...state, 
                loginSuccess: false,
                failureMsg: action.payload,
                user: {}
            } 
        case LOGOUT: 
            return {
                ...state,
                loginSuccess: false, 
                registerSuccess: false, 
                user: {}
            }
        default: 
            return state
    }
}

export default reducer