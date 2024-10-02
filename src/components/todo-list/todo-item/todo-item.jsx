import { memo, useContext } from 'react'
import { TodoContext } from '../todo-list/todo-list'
import './todo-item.css'

const TodoItem = ({ id, content, date, isChecked }) => {
  const { handleToToggleChecked, handleToDelete } = useContext(TodoContext)
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

export default memo(TodoItem)
