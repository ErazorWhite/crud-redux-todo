import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter: (state, action) => ({
      ...state,
      status: action.payload,
    }),
  },
});

export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;