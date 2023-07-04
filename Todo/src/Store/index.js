import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Reducers/Tasks";

const store = configureStore({
  reducer: tasksReducer,
});

export default store;
