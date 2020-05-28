import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App";
import "./app.css";

ReactDom.render(<App />, document.getElementById("root"));
