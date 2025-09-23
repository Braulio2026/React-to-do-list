import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
// import "./style.css"

export default function app() { 
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
     e.preventDefault()

     setTodos([
      ...todos,
      {id: crypto.randomUUID(), title: newItem, completed:
        false },
     ])

     setTodos([
      ...todos,
      {id: crypto.randomUUID(), title: newItem, completed:
        false },
     ])
  }
  
   return (
<>
<form onSubmit={handleSubmit} className="new-item-form">
   <div className="form-row">
     <label htmlFor="item">New-item</label>
     <input 
     value={newItem}
     onChange={e => setNewItem(e.target.value)}
     type="text" 
     id="item" 
     />
   </div>
   <button className="btn">Add</button>
</form>

   <h1 className="headre">To do list</h1>
    <ul className="list">
      <li>
        <label>
         <input type="checkbox"/>
         item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
         <input type="checkbox" />
         item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
         <input type="checkbox" />
         item 3
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
         <input type="checkbox" />
         item 4
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
   </ul>
  </>
 )
}