import React from "react";
import "../app.css";
import ReduxToastr from "react-redux-toastr";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Routes />
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
