import {userService} from "../services";
import {alertActions} from "./alertActions";
import {userConstants} from "../constants";
import {history} from "../configureStore";

export const userActions = {
  login,
  logout,
};

function login(data) {
  const {email, password} = data;
  return (dispatch) => {
    dispatch(request({email}));

    userService
      .login(email, password)
      .then((resp) => {
        if (resp.status) {
          dispatch(success(resp.data));
          history.push("/");
          dispatch(alertActions.success(resp.msg));
        } else {
          dispatch(failure(resp.msg));
          dispatch(alertActions.error(resp.msg));
        }
      })
      .catch((err) => {
        dispatch(alertActions.error(err.message));
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
  return (dispatch) => {
    userService.logout();
    dispatch(success());
    dispatch(alertActions.success("Logged out Succesfully"));
  };
  function success() {
    return {type: userConstants.LOGOUT};
  }
}
