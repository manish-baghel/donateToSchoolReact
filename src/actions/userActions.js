import {userService} from "../services";
import {alertActions} from "./alertActions";
import {userConstants} from "../constants";
import {history} from "../configureStore";

export const userActions = {
  login,
  logout,
};

function login(data) {
  const {email,password} = data;
  return (dispatch) => {
    dispatch(request({email}));

    userService.login(email, password).then((resp) => {
      if (resp.status) {
        dispatch(success(resp.data));
        dispatch(alertActions.success(resp.msg));
        history.push('/');
      } else {
        dispatch(failure(resp.msg))
        dispatch(alertActions.error(resp.msg));
      }
    });
  };
  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
}

function logout() {
  userService.logout();
  return {type: userConstants.LOGOUT};
}
