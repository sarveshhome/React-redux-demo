import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { decrement } from '../../features/counter/counterSlice';
export const store = configureStore({
    reducer: { counter: counterReducer },
})

