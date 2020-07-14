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


function commitReq(req_id,token) {
  return (dispatch) => {
    dispatch(request(req_id));

    reqService.commitReq(req_id,token).then((resp) => {
      console.log("Commit response ------ ", resp);
      if (resp.status) {
        dispatch(success(resp.data));
        dispatch(alertActions.success(resp.msg));
      } else {
        dispatch(failure(resp.msg));
        dispatch(alertActions.error(resp.msg));
      }
    }).catch(err => {
      dispatch(alertActions.error(err.message));
    });
  };
  function request(req_id) {
    return {type: reqConstants.REQ_COMMIT_REQUEST, req_id};
  }
  function success(data) {
    return {type: reqConstants.REQ_COMMIT_SUCCESS, data};
  }
  function failure(error) {
    return {type: reqConstants.REQ_COMMIT_FAILURE, error};
  }
}
