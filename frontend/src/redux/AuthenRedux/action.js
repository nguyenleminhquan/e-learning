import axios from '../../api/axios'
import { 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS,
    LOG_OUT
} from "./type"

const LOGIN_URL = '/user/login'
const REGISTER_URL = '/user/register'

export const login = userInfo => {
    return dispatch => {
        axios.post(LOGIN_URL, userInfo)
            .then(res => {
                const token = res.data.token

                localStorage.setItem('userToken', token)
                dispatch(loginSuccess(token))
                console.log('Login Successfully!')
            })
            .catch(err => {
                const errMsg = err.response.data.msg
                
                dispatch(loginFailure(errMsg))
                console.log('Login Failure!')
            })
    }

    function loginSuccess(token) {
        return {
            type: LOGIN_SUCCESS,
            token
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
                const msg = res.data
            
                dispatch(registerSuccess(msg))
                console.log('Register Successfully!')
            })
            .catch(err => {
                const errMsg = err.response.data.msg
                
                dispatch(registerFailure(errMsg))
                console.log('Register Failure!')
            })
    }

    function registerSuccess(msg) {
        return {
            type: REGISTER_SUCCESS,
            msg
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
    return {
        type: LOG_OUT,
    }
}
