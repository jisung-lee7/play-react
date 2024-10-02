import { useReducer, useRef } from 'react'
import Editor from '../editor/editor'
import Header from '../header/header'
import List from '../list/list'
import './todo-list.css'

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.payload, ...state]
    case 'UPDATE':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      )
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)
  const handleToSetTodos = (content) => {
    dispatch({
      type: 'CREATE',
      payload: {
        id: idRef.current++,
        content: content,
        date: new Date().getTime(),
        isChecked: false
      }
    })
  }

  const handleToToggleChecked = (id) => {
    dispatch({
      type: 'UPDATE',
      payload: id
    })
  }

  const handleToDelete = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id
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
