import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const addTodoHander = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

    return (
        <div>
          <form onSubmit={addTodoHander} >
            <input type="text" placeholder="Enter a todo.." onChange={(e)=> setInput(e.target.value) }/>
            <button onClick={addTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo;