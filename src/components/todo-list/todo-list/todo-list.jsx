import { createContext, useCallback, useMemo, useReducer, useRef } from 'react'
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

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)
  const handleToSetTodos = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      payload: {
        id: idRef.current++,
        content: content,
        date: new Date().getTime(),
        isChecked: false
      }
    })
  }, [])

  const handleToToggleChecked = useCallback((id) => {
    dispatch({
      type: 'UPDATE',
      payload: id
    })
  }, [])

  const handleToDelete = useCallback((id) => {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }, [])

  const memoizedDispatch = useMemo(() => {
    return { handleToSetTodos, handleToToggleChecked, handleToDelete }
  }, [])

  return (
    <div className="todo-list">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default TodoList
