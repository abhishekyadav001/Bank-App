import * as action from "./actionType";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case action.USER_SIGNIN_REQUEST:
      return {
        isLoading: true,
        ...state,
      };
    case action.USER_SIGNIN_FAILED:
      return {
        isError: true,
        ...state,
      };
    case action.USER_LOGIN_REQUEST:
      return {
        isLoading: true,
        ...state,
      };
    case action.USER_LOGIN_FAILED:
      return {
        isError: true,
        ...state,
      };
    case action.USER_LOGIN_SUCCESS:
      return {
        isAuth: true,
      };
    case action.USER_LOGOUT_REQUEST:
      return {
        isLoading: true,
        ...state,
      };

    case action.USER_LOGOUT_FAILED:
      return {
        isAuth: false,
        ...state,
      };
    case action.USER_LOGOUT_SUCCESS:
      return {
        isAuth: false,
        ...state,
      };

    default:
      return state;
  }
};
