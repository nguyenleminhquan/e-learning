import { 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    LOG_OUT, 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS, 
    SET_CURRENT_AUTHEN_PAGE
} from "./type"

const userInfo = JSON.parse(localStorage.getItem('userInfo')) ?? {}

const initState = {
    loading: false,
    loginSuccess: Object.keys(userInfo).length === 0 ? false : true,
    registerSuccess: false,
    isRegistering: window.location.pathname === '/register' ? true : false,
    failureMsg: '',
    userInfo: userInfo
}

const AuthenReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_CURRENT_AUTHEN_PAGE:
            return {
                ...state,
                isRegistering: !state.isRegistering,
                failureMsg: '',
            }
    
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                registerSuccess: false,
                userInfo: action.userInfo,
                failureMsg: ''
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                registerSuccess: false,
                loginSuccess: false,
                failureMsg: action.errMsg
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true,
            }

        case REGISTER_FAILURE:
            return {
                ...state, 
                registerSuccess: false,
                failureMsg: action.errMsg
            }

        case LOG_OUT:
            return {
                ...state, 
                loginSuccess: false,
                userInfo: {}
            }

        default:
            return state
    }
}

export default AuthenReducer
