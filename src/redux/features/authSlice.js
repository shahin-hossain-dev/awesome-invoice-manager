"use client";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: "idle",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = "authenticated";
    },
    clearUser: (state, action) => {
      state.user = null;
      state.token = null;
      state.status = "logged_out";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
