import axios from 'axios'
import { 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    LOGOUT, 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS, 
    SET_CURRENT_AUTHEN_PAGE
} from "./authenTypes"

export const setCurrentAuthenPage = () => {
    return {
        type: SET_CURRENT_AUTHEN_PAGE
    }
}

export const postNewUserInfo = payload => {
    return dispatch => {
        axios.post('http://localhost:5000/user/register', payload)
            .then(response => {
                const users = response.data
                console.log('Register Successfully!!!')
                dispatch(registerSuccess(users))
            })
            .catch(error => {
                console.log('Having an error')
                const errorMsg = error.message
                dispatch(registerFailure(errorMsg))
            })
    }
    function registerSuccess(payload) { return { type: REGISTER_SUCCESS, payload } }
    function registerFailure(payload) { return { type: REGISTER_FAILURE, payload } }
}

export const login = payload => {
    return dispatch => {
        axios.post('http://localhost:5000/user/login', payload)
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


