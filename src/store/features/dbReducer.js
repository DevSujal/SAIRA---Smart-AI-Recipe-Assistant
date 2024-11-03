import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
};

const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {
    connect: (state) => {
      state.isConnected = true;
    },
    disconnect: (state) => {
      state.isConnected = false;
    },
  },
});

export const { connect, disconnect } = dbSlice.actions;

const dbReducer = dbSlice.reducer;

export default dbReducer;
