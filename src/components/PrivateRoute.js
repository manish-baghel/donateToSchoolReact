import React from "react";
import {Route, Redirect} from "react-router-dom";

function PrivateRoute({ children,currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
