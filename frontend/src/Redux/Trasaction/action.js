import * as types from "./actionType";
import { axiosInstance } from "../../utils/axioxconfig";

export const depositAmount = (creds) => async (dispatch) => {
  dispatch({ type: types.DEPOSIT_REQUEST });
  try {
    const res = await axiosInstance.post("/transaction", creds);
    console.log(res);
    dispatch({ type: types.DEPOSIT_SUCCESSFULL });
  } catch (error) {
    dispatch({ type: types.DEPOSIT_FAILED, payload: error.response.data.message });
    return Promise.reject(error.response.data.message);
  }
};

// export const signupAPI = (creds) => async (dispatch) => {
//   dispatch({ type: types.ACCOUNT_LOADING });
//   try {
//     const res = await axiosInstance.post("/users/signup", creds);
//     dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.data });
//   } catch (error) {
//     dispatch({ type: types.ACCOUNT_ERROR, payload: error.response.data.message });
//     return Promise.reject(error.response.data.message);
//   }
// };

// export const logoutAPI = () => async (dispatch) => {
//   dispatch({ type: types.ACCOUNT_LOGOUT });
// };
