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

  const handleToToggleChecked = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    })
  }

  const handleToDelete = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div className="todo-list">
      <Header />
      <Editor handleToSetTodos={handleToSetTodos} />
      <List
        todos={todos}
        handleToToggleChecked={handleToToggleChecked}
        handleToDelete={handleToDelete}
      />
    </div>
  )
}

export default TodoList
