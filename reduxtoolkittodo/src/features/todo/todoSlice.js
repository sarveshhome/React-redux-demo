import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState ={
    todos: [{id: 1, text: "Hello World"}]
}

// Create a slice of the Redux store for todo operations
export const  todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const todo ={
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo:(state, action)=>{
            state.todos= state.todos.map((todo)=> todo.id === action.payload.id ? action.payload : todo)
        },
        deleteTodo:(state, action)=>{
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
});

// Export individual actions for use in components
export const {addTodo, removeTodo, updateTodo, deleteTodo} = todoSlice.actions;

// Export the reducer function for use in the Redux store
export default todoSlice.reducer;