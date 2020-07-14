import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
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
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/requirements">
          <Requirements category="requirement"/>
        </Route>
        <Route exact path="/volunteer">
          <Requirements category="volunteer"/>
        </Route>
        <PrivateRoute exact path="/req" currentUser={props.currentUser}>
          <RequirementPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({currentUser: state.authentication});
export default connect(mapStateToProps, alertActions)(Routes);
