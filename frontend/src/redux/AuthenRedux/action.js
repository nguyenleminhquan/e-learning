import axios from '../../api/axios'
import { 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS,
    LOG_OUT,
    SET_CURRENT_AUTHEN_PAGE,
} from "./type"

const LOGIN_URL = '/user/login'
const REGISTER_URL = '/user/register'

export const setCurrentAuthenPage = () => {
    return {
        type: SET_CURRENT_AUTHEN_PAGE
    }
}

export const login = userInfo => {
    return (dispatch) => {
        axios.post(LOGIN_URL, userInfo)
            .then(res => {
                const userInfo = res.data

                localStorage.setItem('userInfo', JSON.stringify(userInfo))
                dispatch(loginSuccess(userInfo))
                console.log('Login Successfully!')
            })
            .catch(err => {
                const errMsg = err.response.data.msg
                
                dispatch(loginFailure(errMsg))
                console.log('Login Failure!')
            })
    }

    function loginSuccess(userInfo) {
        return {
            type: LOGIN_SUCCESS,
            userInfo
        }
    }

    function loginFailure(errMsg) {
        return {
            type: LOGIN_FAILURE,
            errMsg
        }
    }
}

export const register = (userInfo) => {
    return dispatch => {
        axios.post(REGISTER_URL, userInfo)
            .then(res => {
                dispatch(registerSuccess())
                console.log('Register Successfully!')
            })
            .catch(err => {
                const errMsg = err.response.data.msg
                
                dispatch(registerFailure(errMsg))
                console.log('Register Failure!')
            })
    }

    function registerSuccess() {
        return {
            type: REGISTER_SUCCESS,
        }
    }

    function registerFailure(errMsg) {
        return {
            type: REGISTER_FAILURE,
            errMsg
        }
    }
}

export const logout = () => {
    localStorage.removeItem('userInfo')

    return {
        type: LOG_OUT,
    }
}
