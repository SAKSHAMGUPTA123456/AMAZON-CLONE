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
    },
    decreaseTask(state,action){
      const exisit=state.task.findIndex((curr)=>curr.id==action.payload.id)
      console.log(exisit)
      if(exisit>=0){
        if(state.task[exisit].quantity>0){
        state.task[exisit].quantity-=1
        }
      }
    },
    deleteitem(state,action){
state.task=state.task.filter((curr)=>curr.id!=action.payload.id)
    }
  }
});

export const store = configureStore({
  reducer: {
    task: taskReducer.reducer 
  }
});


export const { addTask ,decreaseTask,deleteitem} = taskReducer.actions;
