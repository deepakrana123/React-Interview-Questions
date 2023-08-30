import React from 'react';
import {useState,useRef} from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from './AddSlice';
const AddTodoList = () => {
    const dispatch =useDispatch();
    const [addTodos,setAddTodo]=useState({})
    const setValue=(e)=>{
        e.preventDefault();
        console.log(e,addTodos,"value")

        dispatch(addTodo(addTodos))
    }
  return (
    <div style={{display:"flex",flexDirection:"column" }}><h1>AddTodoList</h1>
    <form onSubmit={setValue}>
    <label htmlFor="w3review">Label</label>
    <textarea id="w3review" name="w3review" value={addTodos.name} rows="4" cols="50" onChange={(e)=>setAddTodo({text:e.target.value,id:10})}></textarea>
    <input type="submit" style={{width:"50%"}} value="submit"></input>
    </form>
   
    </div>
  )
}

export default AddTodoList