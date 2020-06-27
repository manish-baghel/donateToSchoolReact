import React, {Component} from "react";
import {connect} from "react-redux";
import {reqActions} from "../actions";

class PreloaderComponent extends Component{
  componentDidMount() {
   this.props.fetchAllReqs();
  }
  render(){
    return (<></>);
  }

};

const actionCreators = {
  fetchAllReqs: reqActions.allReq,
};

const Preloader = connect(null, actionCreators)(PreloaderComponent);
export default Preloader;
