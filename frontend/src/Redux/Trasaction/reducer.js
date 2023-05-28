import * as types from "./actionType";

const initData = {
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const transactionReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case types.DEPOSIT_REQUEST:
      return { ...state, isLoading: true };
    case types.DEPOSIT_SUCCESSFULL:
      return { ...state, isLoading: false };
    case types.DEPOSIT_FAILED:
      return { ...state, isError: true, errorMessage: payload.message };
    case types.WITHDRAW_REQUEST:
      return { ...state, isLoading: true };
    case types.WITHDRAW_SUCCESSFULL:
      return { ...state, isLoading: false };
    case types.WITHDRAW_FAILED:
      return { ...state, isError: true, errorMessage: payload.message };
    default:
      return state;
  }
};
