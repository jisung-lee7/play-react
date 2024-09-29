import Editor from '../editor/editor'
import Header from '../header/header'
import List from '../list/list'
import './todo-list.css'

const TodoList = () => {
  return (
    <div className="todo-list">
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default TodoList
