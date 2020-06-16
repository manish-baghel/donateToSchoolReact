import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {authentication} from "./reducers/authReducer";
import {alert} from "./reducers/alertReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    alert
    // all reducers
  });

export default createRootReducer;
