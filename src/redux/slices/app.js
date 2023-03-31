import { createSlice } from "@reduxjs/toolkit";

//
const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be contact, shared, started mess
  },
  snackbar: {
    open: null,
    severity: null,
    message: null,
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    openSnackbar(state, action) {
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackbar(state, action) {
      state.snackbar.open = false;
      state.snackbar.severity = null;
      state.snackbar.message = null;
    },
  },
});

// reducer
export default slice.reducer;

export const toggleSidebarAction = () => async (dispatch) => {
  try {
    dispatch(slice.actions.toggleSidebar());
  } catch (error) {
    console.log(error);
  }
};

export const updateSidebarTypeAction = (type) => async (dispatch) => {
  try {
    dispatch(slice.actions.updateSidebarType({ type }));
  } catch (error) {
    console.log(error);
  }
};

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch) => {
    try {
      dispatch(slice.actions.openSnackbar({ severity, message }));
    } catch (error) {
      console.log(error);
    }
  };

export const closeSnackbar = () => async (dispatch) => {
  try {
    dispatch(slice.actions.closeSnackbar());
  } catch (error) {
    console.log(error);
  }
};
