import './todo-item.css'

const TodoItem = ({
  id,
  content,
  date,
  isChecked,
  handleToToggleChecked,
  handleToDelete
}) => {
  const handleToChangeCheckbox = () => {
    handleToToggleChecked(id)
  }

  const handleToDeleteButtonClick = () => {
    handleToDelete(id)
  }
  return (
    <div className="todo-item">
      <input
        readOnly
        type="checkbox"
        checked={isChecked}
        onChange={handleToChangeCheckbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleToDeleteButtonClick}>Delete</button>
    </div>
  )
}

export default TodoItem
