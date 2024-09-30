import './todo-item.css'

const TodoItem = ({
  content,
  date,
  isChecked
}) => {
  return (
    <div className="todo-item">
      <input
        readOnly
        type="checkbox"
        checked={isChecked}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
