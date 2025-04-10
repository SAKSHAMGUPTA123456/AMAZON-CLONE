import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  task: [] // Array to store tasks
};
const handlelocal=(cut)=>{
  localStorage.setItem("cart",JSON.stringify(cut))
}
// localStorage.clear()
const taskReducer = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action) {
      const exisit=state.task.findIndex((curr)=>curr.id==action.payload.id)
      console.log(exisit)
      if(exisit>=0){
      state.task[exisit].quantity=action.payload.quantity
      state.task[exisit].price=action.payload.price
      }
              else{
 state.task.push(action.payload)
      }
      handlelocal(state.task)
    },
    decreaseTask(state,action){
      const exisit=state.task.findIndex((curr)=>curr.id==action.payload.id)
      console.log(exisit)
      if(exisit>=0){
        state.task[exisit].quantity=action.payload.quantity
        state.task[exisit].price=action.payload.price
      }
     handlelocal(state.task)
    },
    deleteitem(state,action){
state.task=state.task.filter((curr)=>curr.id!=action.payload.id)
handlelocal(state.task)
    }
  }
});

export const store = configureStore({
  reducer: {
    task: taskReducer.reducer 
  }
});


export const { addTask ,decreaseTask,deleteitem} = taskReducer.actions;
