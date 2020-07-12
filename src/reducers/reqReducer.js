import {reqConstants} from "../constants";

const initialState = {};

export function requirements(state = initialState, action) {
  switch (action.type) {
    case reqConstants.REQS_GETALL_REQUEST:
      return {
        fetchingAllReqs: true,
      };
    case reqConstants.REQS_GETALL_SUCCESS:
      return {
        fetchedAllReqs: true,
        allReqs: action.allReqs,
      };
    case reqConstants.REQS_GETALL_FAILURE:
      return {};
    case reqConstants.REQ_COMMIT_REQUEST:
      return Object.assign({}, state, {
        req_committing:action.payload.req_id
      });
    case reqConstants.REQ_COMMIT_SUCCESS:
      return Object.assign({}, state, {
        req_committed:action.payload.req_id
      });
    case reqConstants.REQ_COMMIT_FAILURE:
      return state;
    default:
      return state;
  }
}
