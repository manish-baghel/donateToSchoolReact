import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {authentication} from "./reducers/authReducer";
import {alert} from "./reducers/alertReducer";
import {reducer as toastr} from "react-redux-toastr";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    alert,
    toastr
    // all reducers
  });

export default createRootReducer;
