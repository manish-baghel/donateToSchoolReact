import React from "react";
import Landing from "./LandingPage";
import {Router, Route, Switch} from "react-router-dom";
import "../app.css";
import Login from "./Login";
import Signup from "./Signup";
import {history} from "../configureStore";
import ReduxToastr from "react-redux-toastr";
import Requirements from "./Requirements";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/requirements">
            <Requirements />
          </Route>
        </Switch>
      </Router>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar={false}
        closeOnToastrClick
      />
    </>
  );
}

export default App;
