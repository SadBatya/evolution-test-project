import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

export const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    visibleBackdrop: (state) => {
      state.isVisible = true;
    },
    hiddenBackdrop: (state) => {
      state.isVisible = false;
    },
  },
});

export const { visibleBackdrop, hiddenBackdrop } = backdropSlice.actions;
