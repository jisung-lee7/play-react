import './emotional-diary.css'
import Diary from '../pages/diary'
import Home from '../pages/home'
import New from '../pages/new'
import Notfound from '../pages/notfound'
import Edit from '../pages/edit'
import { Route, Routes } from 'react-router-dom'
import { createContext, useEffect, useReducer, useRef, useState } from 'react'

const diaryReducer = (state, action) => {
  let nextState

  switch (action.type) {
    case 'INIT':
      return action.payload
    case 'CREATE': {
      nextState = [action.payload, ...state]
      break
    }
    case 'EDIT': {
      nextState = state.map((prev) =>
        String(prev.id) === String(action.payload.id) ? action.payload : prev
      )
      break
    }
    case 'DELETE': {
      nextState = state.filter(
        (prev) => String(prev.id) !== String(action.payload)
      )
      break
    }
    default:
      return state
  }

  localStorage.setItem('diarys', JSON.stringify(nextState))

  return nextState
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

const EmotionalDiary = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [diarys, dispatch] = useReducer(diaryReducer, [])
  const idRef = useRef(0)

  useEffect(() => {
    const storedDiarys = localStorage.getItem('diarys')
    if (!storedDiarys) {
      setIsLoading(false)
      return
    }

    const parsedDiarys = JSON.parse(storedDiarys)
    if (!Array.isArray(parsedDiarys)) {
      setIsLoading(false)
      return
    }

    let maxId = 0
    parsedDiarys.forEach((diary) => {
      if (Number(diary.id) > maxId) {
        maxId = Number(diary.id)
      }
    })

    idRef.current = maxId + 1

    dispatch({
      type: 'INIT',
      payload: parsedDiarys
    })
    setIsLoading(false)
  }, [])

  const handleToCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      payload: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const handleToEdit = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'EDIT',
      payload: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const handleToDelete = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  if (isLoading) {
    return <div>Loading data...</div>
  }

  return (
    <>
      <div className="emotional-diary">
        <div className="root">
          <DiaryStateContext.Provider value={diarys}>
            <DiaryDispatchContext.Provider
              value={{ handleToCreate, handleToEdit, handleToDelete }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </DiaryDispatchContext.Provider>
          </DiaryStateContext.Provider>
        </div>
      </div>
    </>
  )
}

export default EmotionalDiary
