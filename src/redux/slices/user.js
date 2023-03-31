import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import { closeSnackbar, showSnackbar } from "./app";

const slice = createSlice({
  name: "user",
  initialState: { isLogin: false, token: "" },
  reducers: {
    signin(state, action) {
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLogin = false;
      state.token = "";
    },
    signup(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export default slice.reducer;

// sign in
export const signin = (values, handleRedirect) => async (dispatch) => {
  try {
    //
    const { data } = await userApi.signin(values);
    dispatch(
      slice.actions.signin({
        isLogin: true,
        token: data.token,
      }),
    );

    dispatch(showSnackbar({ severity: data.status, message: data.message }));

    if (data.status === "success") {
      localStorage.setItem("token", data.token);
      handleRedirect();
    }

    setTimeout(() => {
      dispatch(closeSnackbar());
    }, 3000);
  } catch (error) {
    const { data } = error.response;
    dispatch(showSnackbar({ severity: data.status, message: data.message }));
  }
};

// sign up
export const signup = (values, handleRedirect) => async (dispatch) => {
  try {
    // dispatch actions
    const { data } = await userApi.signup(values);
    dispatch(slice.actions.signup());
    if (data.status === "success") {
      handleRedirect();
    }
    dispatch(showSnackbar({ severity: data.status, message: data.message }));
  } catch (error) {
    const { data } = error.response;
    dispatch(showSnackbar({ severity: data.status, message: data.message }));
  }
};

// log out
export const logout = () => async (dispatch) => {
  try {
    dispatch(slice.actions.signOut());
  } catch (error) {
    console.log(error);
  }
};
