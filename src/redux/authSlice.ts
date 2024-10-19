import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSigningIn: false,
    user: {
        
    }
  },
  reducers: {
  },
});

const { actions } = authSlice;
export const appReducer = authSlice.reducer;
export const { } = actions;
