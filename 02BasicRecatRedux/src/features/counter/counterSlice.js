import { createSlice } from '@reduxjs/toolkit';
//Initial state of the counter
const initialState = {
    value: 0,
}
//Create a slice of the Redux store for counter operations
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})
//Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
//Export the reducer as default export
export default counterSlice.reducer;