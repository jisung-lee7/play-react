import { useState } from 'react'
import TodoItem from '../todo-item/todo-item'
import './list.css'

const List = ({ todos, handleToToggleChecked }) => {
  const [search, setSearch] = useState('')
  const handleToSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilterData = () => {
    if (search === '') {
      return todos
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const filteredTodos = getFilterData()

  return (
    <div className="list">
      <h4>Todo List</h4>
      <input
        value={search}
        onChange={handleToSearch}
        placeholder="input search something.."
      />
      <div className="todos-wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              handleToToggleChecked={handleToToggleChecked}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List
