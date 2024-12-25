import TodoCard from "./TodoCard"

const TodoList = ({handleUpdateItem,handleDeleteItem,todos}) => {
  return (
    <ul className="todoList">
      {todos.map((todo,todoIndex)=>
       <TodoCard handleUpdateItem={handleUpdateItem} handleDeleteItem={handleDeleteItem} key={todoIndex} index={todoIndex}>
          <p>{todo}</p>
       </TodoCard>
      )}
    </ul>
  )
}

export default TodoList
