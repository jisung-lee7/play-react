import TodoItem from '../todo-item/todo-item'
import './list.css'

const List = () => {
  return (
    <div className="list">
      <h4>Todo List</h4>
      <input placeholder="input search something.." />
      <div className="todos-wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}

export default List
