import React, { useState } from 'react'
import TodoList from './todoList'
import todosInstance from './todoConstructor'

const todos=todosInstance
const ConstructorPattern = () => {
    const [todos,setTodos]=useState(todosInstance.getTodos())
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{margin:20}}>
            <TodoList store={todosInstance} setTodos={setTodos} todos={todos}/>

        </div>
        <div style={{margin:20}}>
            <TodoList store={todosInstance} setTodos={setTodos} todos={todos}/>

        </div>
    </div>
  )
}

export default ConstructorPattern