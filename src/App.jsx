import { useState,useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Toastify from 'toastify-js'
import { showMessage } from "./Toastify/Toastify";
function App() {

const [todos,setTodos] = useState([]);
const [todoValue,setTodoValue] = useState('');

  const persistData = (newList)=>{
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  const handleAddTodo = (newTodo)=>{
    if(!todos.includes(newTodo)){
      const newTodoList = [...todos,newTodo];
      setTodos(newTodoList);
      persistData(newTodoList);
    }else{
      showMessage(`Value ${newTodo} is already in the list`,'error');
    }
  }

  const handleDeleteTodo = (index)=>{
     if(confirm('Want to delete value?')){
      const newTodoList = todos.filter((todo,i)=>{ return i!==index});
      setTodos(newTodoList);
      persistData(newTodoList)
     }
  }

  const updateTodoItem=(index)=>{
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index); 
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todos')){
      return;
    }

    let localTodos = localStorage.getItem('todos');
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  },[])

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleTodos={handleAddTodo}/>
      <TodoList handleUpdateItem={updateTodoItem} handleDeleteItem={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
