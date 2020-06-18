import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import App from "./components/App";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./app.css";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import configureStore, {history} from "./configureStore";

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
