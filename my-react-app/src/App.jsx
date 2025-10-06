import { useState } from 'react'
import "./App.css"
import "./index.css"
import { NewTodoForm } from "./newTodoForm"

export default function app() { 
  const [todos, setTodos] = useState([])
 
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }


function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed }
      }

      return todo
    })
  })
}

function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

   return (
<>
<NewTodoForm onSubmit={addTodo}/>
   <h1 className="header">To do list</h1>
    <ul className="list">
      {todos.length === 0 && "NO TODO LIST!"}
      {todos.map(todo => {
        return (
      <li key={todo.id}>
      <label>
        <input 
         type="checkbox" ckecked={todo.completed}
         onChange={e => toggleTodo(todo.id, e.target.checked )}
         />
         {todo.title}
      </label>
      <button 
         onClick={() => deleteTodo(todo.id)}
         className="btn btn-danger">
          Delete
         </button>
      </li>
        )
      })}      
   </ul>
  </>
   )
}

