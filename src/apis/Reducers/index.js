import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import history from "utils/History/History";
import errorReducer from './errorReducer'

export default combineReducers({
    errors: errorReducer,
    routes: connectRouter(history),
})