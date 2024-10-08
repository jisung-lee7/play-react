import { useRef, useState } from 'react'
import { useUpdateTodo } from '../contexts/todo-provider'
import './editor.css'

const Editor = () => {
  const { handleToSetTodos } = useUpdateTodo()
  const [content, setContent] = useState('')
  const contentRef = useRef()
  const handleToSetTodo = (e) => {
    setContent(e.target.value)
  }

  const handleToSubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      return
    }
    handleToSetTodos(content)
    setContent('')
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      handleToSubmit()
    }
  }

  return (
    <div className="editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={handleToSetTodo}
        placeholder="new Todo..."
      />
      <button onClick={handleToSubmit}>Add</button>
    </div>
  )
}

export default Editor
