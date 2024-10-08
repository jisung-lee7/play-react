import { TodoProvider } from '../contexts/todo-provider'
import Editor from '../editor/editor'
import Header from '../header/header'
import List from '../list/list'
import './todo-list.css'

const TodoList = () => {
  return (
    <div className="todo-list">
      <Header />
      <TodoProvider>
        <Editor />
        <List />
      </TodoProvider>
    </div>
  )
}

export default TodoList
