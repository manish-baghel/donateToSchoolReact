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
    default:
      return state;
  }
}
