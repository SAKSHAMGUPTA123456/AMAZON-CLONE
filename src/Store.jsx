import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  task: [] // Array to store tasks
};

const taskReducer = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      const exisit=state.task.findIndex((curr)=>curr.id==action.payload.id)
      console.log(exisit)
      if(exisit>=0){
        state.task[exisit].quantity+=1
      }
      else{
 state.task.push(action.payload)
      }
    }
  }
});

export const store = configureStore({
  reducer: {
    task: taskReducer.reducer 
  }
});


export const { addTask } = taskReducer.actions;
