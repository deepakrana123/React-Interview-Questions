import { createSlice } from '@reduxjs/toolkit';
import {dataTodo} from "./Todo/data"

export const addTodoSlice=createSlice({
    name:'todo',
    initialState:{
        loading:false,
        todo:dataTodo
    },

    reducers:{
        addTodo:{
            reducer(state , {payload}){
                state.todo.todos=[...state.todo.todos,payload]
            }
        },
        removeTodo:{
            reducer(state,{payload}){
                state.todo.todos = state.todo.todos.filter(item=>item.id!==payload)
            }
        },
    }
})

export const { addTodo, removeTodo } = addTodoSlice.actions 
export default addTodoSlice.reducer

