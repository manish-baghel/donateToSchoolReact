import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {authentication} from "./reducers/authReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication
    // all reducers
  });

export default createRootReducer;
