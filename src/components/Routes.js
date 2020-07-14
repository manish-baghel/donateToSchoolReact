import React from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {history} from "../configureStore";
import {connect} from "react-redux";
import {alertActions} from "../actions/alertActions";
import Landing from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";
import Requirements from "./Requirements";
import RequirementPage from "./RequirementPage";
import PrivateRoute from "./PrivateRoute";

const Routes = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL+"/"}>
          <Landing />
        </Route>
        <Route path={process.env.PUBLIC_URL+"/login"}>
          <Login />
        </Route>
        <Route path={process.env.PUBLIC_URL+"/signup"}>
          <Signup />
        </Route>
        <Route path={process.env.PUBLIC_URL+"/requirements"}>
          <Requirements category="requirement"/>
        </Route>
        <Route path={process.env.PUBLIC_URL+"/volunteer"}>
          <Requirements category="volunteer"/>
        </Route>
        <PrivateRoute path={process.env.PUBLIC_URL+"/req"} currentUser={props.currentUser}>
          <RequirementPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({currentUser: state.authentication});
export default connect(mapStateToProps, alertActions)(Routes);
