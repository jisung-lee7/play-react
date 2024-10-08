import { createContext, useContext, useReducer, useRef } from 'react'

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

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

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)
  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={{ dispatch, idRef }}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export const useTodo = () => {
  const state = useContext(TodoStateContext)

  if (!state) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  const todos = state

  return todos
}

export const useUpdateTodo = () => {
  const { dispatch, idRef } = useContext(TodoDispatchContext)

  if (!dispatch) {
    throw new Error('useUpdateTodo must be used within a TodoProvider')
  }

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

  return { handleToSetTodos, handleToToggleChecked, handleToDelete }
}
