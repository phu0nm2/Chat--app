import { createSlice } from '@reduxjs/toolkit';

//
const initialState = {
  sidebar: {
    open: false,
    type: 'CONTACT', // can be contact, shared, started mess
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
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
