import { 
    LOGIN_FAILURE, 
    LOGIN_SUCCESS, 
    LOG_OUT, 
    REGISTER_FAILURE, 
    REGISTER_SUCCESS 
} from "./type"

const initState = {

}

const AuthenReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {

            }
        case LOGIN_FAILURE:
            return {

            }
        case REGISTER_SUCCESS:
            return {

            }
        case REGISTER_FAILURE:
            return {

            }
        case LOG_OUT:
            return {

            }
        default:
            return state
    }
}

export default AuthenReducer
