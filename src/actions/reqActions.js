import {reqService} from "../services/reqService";
import {alertActions} from "./alertActions";
import {reqConstants} from "../constants";

export const reqActions = {
  allReq,
  commitReq
};

function allReq() {
  return (dispatch) => {
    dispatch(request());

    reqService.allReq().then((resp) => {
      if (resp.status) {
        dispatch(success(JSON.parse(resp.data)));
      } else {
        dispatch(failure(resp.msg));
      }
    }).catch(err => {
      dispatch(alertActions.error(err.message));
    });
  };
  function request() {
    return {type: reqConstants.REQS_GETALL_REQUEST};
  }
  function success(allReqs) {
    return {type: reqConstants.REQS_GETALL_SUCCESS, allReqs};
  }
  function failure(error) {
    return {type: reqConstants.REQS_GETALL_FAILURE, error};
  }
}


function commitReq(req_id) {
  return (dispatch) => {
    dispatch(request());

    reqService.commitReq(req_id).then((resp) => {
      if (resp.status) {
        dispatch(success(JSON.parse(resp.data)));
      } else {
        dispatch(failure(resp.msg));
      }
    }).catch(err => {
      dispatch(alertActions.error(err.message));
    });
  };
  function request() {
    return {type: reqConstants.REQ_COMMIT_REQUEST};
  }
  function success(allReqs) {
    return {type: reqConstants.REQ_COMMIT_SUCCESS, data};
  }
  function failure(error) {
    return {type: reqConstants.REQ_COMMIT_FAILURE, error};
  }
}
