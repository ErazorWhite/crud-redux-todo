import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import tasksSlice from "./taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    filters: filterSlice,
  },
});
