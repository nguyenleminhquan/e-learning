import { combineReducers } from "redux";
import AuthenReducer from "./AuthenRedux/reducer";

const rootReducer = combineReducers({
    authen: AuthenReducer
})

export default rootReducer
