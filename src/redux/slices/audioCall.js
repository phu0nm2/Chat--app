import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open_audio_dialg: false,
};

const slice = createSlice({
  name: "audioCall",
  initialState,
  reducers: {},
});

export default slice.reducer;

export const startAudioCall = (id) => {};
