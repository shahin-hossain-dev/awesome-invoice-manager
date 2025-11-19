import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: false,
};

const collapseSlice = createSlice({
  name: "sidebar-collapse",
  initialState,
  reducers: {
    setIsCollapsed: (state, { payload }) => {
      state.isCollapsed = payload;
    },
  },
});

export const { setIsCollapsed } = collapseSlice.actions;

export default collapseSlice.reducer;
