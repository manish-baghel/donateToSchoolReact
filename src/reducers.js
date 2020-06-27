import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {authentication} from "./reducers/authReducer";
import {alert} from "./reducers/alertReducer";
import {requirements} from "./reducers/reqReducer"
import {reducer as toastr} from "react-redux-toastr";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    alert,
    toastr,
    requirements
    // all reducers
  });

export default createRootReducer;
