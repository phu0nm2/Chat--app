import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

const slice = createSlice({
  name: "user",
  initialState: { isLogin: false, token: "" },
  reducers: {
    signin(state, action) {
      state.isLogin = action.payload;
      state.token = action.payload;
    },
    signUp(state, action) {
      state.isLogin = false;
      state.token = "";
    },
  },
});

export default slice.reducer;

// sign in
export const signin = (values, handleRedirect) => async (dispatch) => {
  try {
    //
    const { data } = await userApi.signin(values);
    dispatch(slice.actions.signin());
    if (data.status === "success") {
      handleRedirect();
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// sign up
