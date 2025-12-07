import { createSlice } from "@reduxjs/toolkit";
// Define the initial state of the counter
const initialState={
    value:0,
}

export const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload;
        }
    }

    
});

console.log(counterSlice);

export const { increment, decrement, incrementByAmount } = counterSlice.actions
const { reducer } = counterSlice;
export default reducer
