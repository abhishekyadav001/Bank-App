import * as action from "./actionTypes";
import axios from "axios";

export const singinSuccess = () => {
  return {
    type: action.USER_SIGNIN_SUCCESS,
  };
};

export const signinFailed = () => {
  return {
    type: action.USER_SIGNIN_FAILED,
  };
};

export const loginSuccesful = (token) => {
  return {
    type: action.USER_LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginRequest = () => {
  return {
    type: action.USER_LOGIN_REQUEST,
  };
};
export const loginSuccess = (token) => {
  return {
    type: action.USER_LOGIN_FAILED,
    payload: token,
  };
};

export const loginFailed = () => {
  return {
    type: action.USER_LOGIN_FAILED,
  };
};

export const logoutRequest = () => {
  return {
    type: action.USER_LOGOUT_REQUEST,
  };
};

export const logoutSuccess = () => {
  return {
    type: action.USER_LOGIN_SUCCESS,
  };
};

export const logoutFailed = () => {
  return {
    type: action.USER_LOGOUT_FAILED,
  };
};
