import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

const { actions } = appSlice;
export const appReducer = appSlice.reducer;
export const { setAppLoading } = actions;
