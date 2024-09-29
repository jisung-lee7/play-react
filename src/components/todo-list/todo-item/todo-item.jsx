import './todo-item.css'

const TodoItem = () => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <div className="content">Todo...</div>
      <div className="date">Date</div>
      <button>Delete</button>
    </div>
  )
}

export default TodoItem
