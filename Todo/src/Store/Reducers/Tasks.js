// reducers/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTasks: (state, action) => {
      state = action.payload;
      return state;
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task._id !== action.payload);
    },
    updateTask: (state, action) => {
      return state.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    },
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTask, addTasks, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
