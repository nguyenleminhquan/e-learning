// import axios from 'axios'
// import AuthenServices from '../../services/authen.services'
import axios from '../../api/axios'
import { 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    LOGOUT, 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS, 
    SET_CURRENT_AUTHEN_PAGE
} from "./authenTypes"

const LOGIN_URL = '/user/login'
const REGISTER_URL = '/user/register'

export const setCurrentAuthenPage = () => {
    return {
        type: SET_CURRENT_AUTHEN_PAGE
    }
}   

export const register = payload => {
    return dispatch => {
        axios.post(REGISTER_URL, payload)
            .then(response => {
                const users = response.data

                dispatch(registerSuccess(users))
                console.log('Register Successfully!!!')
            })
            .catch(error => {
                const errorMsg = error.message
                
                dispatch(registerFailure(errorMsg))
                console.log('Having an error')
            })
    }
    function registerSuccess(payload) { return { type: REGISTER_SUCCESS, payload } }
    function registerFailure(payload) { return { type: REGISTER_FAILURE, payload } }
}

export const login = payload => {
    return dispatch => {
        axios.post(LOGIN_URL, payload)
            .then(response => {
                const user = response.data
                
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(loginSuccess(user))
                console.log('Login Successfully!!!')
            })
            .catch(error => {
                const errorMsg = error.message
                
                dispatch(loginFailure(errorMsg))
                console.log('Having an error!!!')
            })
    }
    function loginSuccess(payload) { return { type: LOGIN_SUCCESS, payload } }
    function loginFailure(payload) { return { type: LOGIN_FAILURE, payload } }
}

export const logout = () => {
    localStorage.removeItem('user')
    
    return {
        type: LOGOUT,
    }
}
