import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  task: [] // Array to store tasks
};

const taskReducer = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    }
  }
});

export const store = configureStore({
  reducer: {
    task: taskReducer.reducer 
  }
});


export const { addTask } = taskReducer.actions;
