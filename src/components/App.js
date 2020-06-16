import React from "react";
import Landing from "./LandingPage";
import {Router, Route, Switch} from "react-router-dom";
import "../app.css";
import Login from "./Login";
import {history} from "../configureStore";
import { alertActions } from "../actions"
import { connect } from "react-redux";

function Alert(props) {
  const {alert} = props;
  const classes =
    alert.type == "normal"
      ? "bg-green-100 border-green-400 text-green-700"
      : "bg-red-100 border-red-400 text-red-700";
  return (
    <div>
    <div className={`${classes} border px-4 py-3 rounded relative`} role="alert">
      <span className="block sm:inline">{alert.message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className={`fill-current h-6 w-6 ${classes}`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  </div>
  );
}
function AppComponent(props) {
  const {alert} = props;
  return (
    <>
      {alert.message && (
        <Alert alert={alert}/>
      )}
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function mapStateToProps(state){
  const { alert } = state;
  return { alert };
}
const actionCreators = {
  clearAlerts:alertActions.clear
};



const App  = connect(mapStateToProps,actionCreators)(AppComponent);

export default App;
