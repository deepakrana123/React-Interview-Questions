// class Todos {
//   todos = [];
//   constructor() {}
//   getTodos() {
//     return this.todos;
//   }

//   addTodos(text) {
//     this.todos.push(text);
//   }

//   changeTodoText(text, index) {
//     this.todos[index] = text;
//   }
// }

// export default Todos;

// class of constructor class doesnot make two instance but it will make a single memoary with haveing change value and all self decalred function ones

// but function does it will make a new memoary every single time , and have all the funtion in the protype of that memoary
//  es5
// function Todos() {
//   todos = [];

//   this.getTodos = function () {
//     return this.todos;
//   };

//   this.addTodos = function (text) {
//     this.todos.push(text);
//   };

//   this.changeTodoText = function (text, index) {
//     this.todos[index] = text;
//   };
// }

// // to get ride of extra memoary alloacation

// Todos.prototype.getTodos=function(){
//     return this.todos
// }
// export default Todos;

// singleTon pattern
// to make a single instance for all
//  but in singleton there would be one instance for all the appliation like redux or contectApi

// const todos = [];
// let instance = null;

// class Todos {
//   constructor() {
//     if (instance != null) {
//       throw new Error("Only one instance of todos");
//     }
//     instance = this;
//   }
//   getInstance() {
//     return instance;
//   }
//   getTodos() {
//     return todos;
//   }
//   addTodos(text) {
//     todos.push(text);
//   }
//   changeTodoText = function (text, index) {
//     todos[index] = text;
//   };
// }

// const toododn={
//     getTodos() {
//         return todos;
//       },
//       addTodos:function(text) {
//         todos.push(text);
//       },
//       changeTodoText: function (text, index) {
//         todos[index] = text;
//       }

// }
// const todosInstance = new Todos();
// Object.freeze(todosInstance);
// export default todosInstance;

// factory pattern

const todos = [];

const createTodos = (textTodos) => {
  const id = Date.now();
  return {
    text: textTodos,
    id,
    deleteSelf() {
      const index = todos.findIndex((item) => {
        return item.id == id;
      });
      todos.splice(index, 1);
    },
  };
};
const TodosStore = {
  getTodos() {
    return todos;
  },
  addTodos: function (text) {
    todos.push(createTodos(text));
  },
  changeTodoText: function (text, index) {
    todos[index] = text;
  },
};

Object.freeze(TodosStore);
export default TodosStore