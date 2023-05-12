import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import { closeSnackbar, showSnackbar } from "./app";

const initialState = {
  isLogin: false,
  token: "",
  users: [],
  friends: [],
  friendRequests: [],
};

const slice = createSlice({
  name: "user",
  initialState,
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

    getUserList(state, action) {
      state.users = action.payload;
    },
    getFriends(state, action) {
      state.friends = action.payload;
    },
    getFriendRequests(state, action) {
      state.friendRequests = action.payload;
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

    if (data.status === "success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", data.user_id);
      handleRedirect();
    }

    dispatch(showSnackbar({ severity: data.status, message: data.message }));

    setTimeout(() => {
      dispatch(closeSnackbar());
    }, 3000);
  } catch (error) {
    const { data } = error?.response;
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
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  } catch (error) {
    console.log(error);
  }
};

// get users list
export const fetchUsers = () => async (dispatch) => {
  try {
    //
    const token = localStorage.getItem("token");

    const { data } = await userApi.getUsers({ token });

    dispatch(slice.actions.getUserList({ data }));

    // console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFriends = () => async (dispatch) => {
  try {
    //
    const token = localStorage.getItem("token");

    const { data } = await userApi.getFriends({ token });

    dispatch(slice.actions.getFriends({ data }));

    // console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchFriendRequests = () => async (dispatch) => {
  try {
    //
    const token = localStorage.getItem("token");

    const { data } = await userApi.getFriendRequests({ token });

    dispatch(slice.actions.getFriendRequests({ data }));

    // console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
