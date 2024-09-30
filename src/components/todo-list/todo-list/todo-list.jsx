import { useRef, useState } from 'react'
import Editor from '../editor/editor'
import Header from '../header/header'
import List from '../list/list'
import './todo-list.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const idRef = useRef(0)
  const handleToSetTodos = (content) => {
    const newTodo = {
      id: idRef.current++,
      content: content,
      date: new Date().getTime(),
      isChecked: false
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <div className="todo-list">
      <Header />
      <Editor handleToSetTodos={handleToSetTodos} />
      <List />
    </div>
  )
}

export default TodoList
