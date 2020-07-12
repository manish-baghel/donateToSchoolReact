import React, {Component} from "react";
import {connect} from "react-redux";
import {reqActions} from "../actions";

class PreloaderComponent extends Component {
  componentDidMount() {
    // use this switch-case to call action creator before loading any component
    // which depends on some data before rendering the page
    switch (this.props.type) {
      case "requirements":
        this.props.fetchAllReqs();
        break;
      case "all":
        this.props.fetchAllReqs();
        break;
      default:
        console.log("=== Warning : Preloader Component Requested without props ====");
    }
  }
  render() {
    return <></>;
  }
}

const actionCreators = {
  fetchAllReqs: reqActions.allReq,
};

const Preloader = connect(null, actionCreators)(PreloaderComponent);
export default Preloader;
