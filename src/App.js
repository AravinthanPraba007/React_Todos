import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todos, setTodos] = useState([])
  const todoInputRef = useRef()
  const LOCAL_STORAGE_KEY ='todoApp.todos'

  //  If todo is empty we are trying to getting back stored todos form local storage
  useEffect(() => {
    const storedTodo =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    if(storedTodo) setTodos(storedTodo)
  },[])

  // Storing the existing todo in local storage 
  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

 

  function handleAddTodo(e) {
    const task = todoInputRef.current.value
    if(task === '') return
    setTodos( prevTodos => {
      return [...prevTodos, {id:uuidv4(), name: task, completed: false}]
    })
    todoInputRef.current.value=null
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoInputRef} type="text" />
      <button onClick= {handleAddTodo}>Add To do</button>
      <button>Delete all</button>
      <div>
        0 Pending Task
    </div>
    </>

  );
}

export default App;
