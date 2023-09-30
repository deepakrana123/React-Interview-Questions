import React from 'react'
import "./todoCss.css"
import {useState} from "react"
import FilteredTodo from './FilteredTodo' ;
import { useDispatch } from 'react-redux';
import { removeTodo } from './AddSlice';
const Todo = (item) => {
    console.log(item,"item")
    const dispatch=useDispatch()
    const [todo,setTodo]=useState(item.item)
    const [filteredTodo,setfilteredTodo]=useState()
    const [showButton,setShowButton]=useState(false)
    const checkboxValue=(items)=>{
        console.log(items,item,item.item)

        // const value=item.filter(itemIndex=>itemIndex!==items)
        // setfilteredTodo(value)
      }
      const deleteTodo=(items)=>{
        console.log(items)
        dispatch(removeTodo(items))
    }
  return (
    <div className='todoValue'>
        <input type="checkbox" onClick={()=>checkboxValue(item.item.id)}></input>
        {/* <h1>{item.item.id}</h1> */}
        <h2>{item.item.text}</h2>
       <button onClick={()=>deleteTodo(item.item.id)}>Delete </button>
       {filteredTodo && <FilteredTodo filterValue={filteredTodo}/>}
    </div>
  )
}

export default Todo