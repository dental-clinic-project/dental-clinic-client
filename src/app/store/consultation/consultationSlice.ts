import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { InitialStateType } from "./consultationSlice.types";

const initialState: InitialStateType = {
  date: "",
};

export const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    addDateToState: (state: InitialStateType, action: PayloadAction<string>) => {
      state.date = action.payload;
    }
  },
});

export const { addDateToState } = consultationSlice.actions;
export default consultationSlice.reducer;