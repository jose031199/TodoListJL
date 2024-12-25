import React from 'react'

const TodoCard = (props) => {
  const {children,handleUpdateItem,handleDeleteItem,index} = props
  //console.log(props)
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={()=>{handleUpdateItem(index)}}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{handleDeleteItem(index)}}>
          <i className="fa-solid fa-trash"></i> 
        </button>
      </div>
    </li>
  )
}

export default TodoCard
