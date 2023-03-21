import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

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
    dispatch(slice.actions.signin({ isLogin: true, token: data.token }));
    if (data.status === "success") {
      localStorage.setItem("token", data.token);
      handleRedirect();
    }
  } catch (error) {
    alert(error.response.data.message);
    dispatch(error.response.data.message);
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
    alert("Congrat!!!");
  } catch (error) {
    alert(error.response.data.message);
    dispatch(error.response.data.message);
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
