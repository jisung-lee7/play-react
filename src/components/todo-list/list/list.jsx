import { useMemo, useState } from 'react'
import TodoItem from '../todo-item/todo-item'
import './list.css'

const List = ({ todos, handleToToggleChecked, handleToDelete }) => {
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

  // const getAnalyzedData = () => {
  //   // console.log('called getAnalyzedData()')
  //   const totalCount = todos.length
  //   const doneCount = todos.filter((todo) => todo.isChecked).length
  //   const notDoneCount = totalCount - doneCount
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount
  //   }
  // }

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData()

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // console.log('called getAnalyzedData()')
    const totalCount = todos.length
    const doneCount = todos.filter((todo) => todo.isChecked).length
    const notDoneCount = totalCount - doneCount
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todos])

  return (
    <div className="list">
      <h4>Todo List</h4>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
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
              handleToDelete={handleToDelete}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List
