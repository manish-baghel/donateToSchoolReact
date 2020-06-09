import React from "react";
import Landing from "./LandingPage";
import {Route, Switch} from "react-router";
import "../app.css";
import Login from "./Login";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
