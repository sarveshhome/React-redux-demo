import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    todos:[{
        id:1,
        todo:"todo msg",
        completed:false
    }],

    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    console.log('context==>', useContext(ThemeContext));
    return useContext(ThemeContext)
}

export const TodoProvider = ThemeContext.Provider
