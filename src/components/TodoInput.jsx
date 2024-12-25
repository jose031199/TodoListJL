import { useState } from "react"
import { showMessage } from "../Toastify/Toastify";

const TodoInput = ({todoValue,setTodoValue,handleTodos}) => {
  //const [todoValue,setTodoValue] = useState('');
  const handleInputChange = (e)=>{
    if (e.target.value!='') {
      setTodoValue(e.target.value.toLowerCase());      
    }else{
      showMessage(`Please input a value`,'error')
    }
  }

  return (
    <div className="todoHeader">
        <input type="text" name="" id="txtInput" placeholder="Enter todo ...." value={todoValue}  onChange={handleInputChange}/>
        <button onClick={()=>{
          handleTodos(todoValue) 
          setTodoValue('')}}>Add</button>
    </div>
  )
}

export default TodoInput
