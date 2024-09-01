import React, { useState } from "react";
import todosInstance from "./todoConstructor";

const TodoList = ({ todos,setTodos,store }) => {
  //   const [store] = useState(new Todos());
  //   const [todos, setTodo] = useState(store.getTodos());
  // const []
  //   console.log(todos);
//   const [todos, setTodos] = useState(store);
    const addTodoText = (event, index) => {
      console.log(event,index)
      store.changeTodoText(event, index);
      setTodos([...store.getTodos()])
    };
  console.log();
  return (
    <div>
      <div>
        TodoList
        {todos?.map((tod, index) => {
          return (
            // <input
            //   key={index}
            //   id="value"
            //   name={tod}
            //   type="text"
            //   value={tod.text}
            //   onChange={(event) => addTodoText(event.target.value, index)}
            // />
            <li key={index} onClick={()=>
                {tod.deleteSelf()
                    setTodos([...store.getTodos()]);
                }
            }>{tod.text}</li>
          );
        })}
      </div>

      <div>
        <button
          style={{
            marginTop: 4,
            borderRadius: "10px",
            color: "white",
            backgroundColor: "blue",
            width: "100%",
            height: "40px",
            padding: "20px",
          }}
            onClick={() => {
              store.addTodos("new Todo" + (Math.random() + 300).toFixed());
              setTodos([...store.getTodos()]);
            }}
        >
          Todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
