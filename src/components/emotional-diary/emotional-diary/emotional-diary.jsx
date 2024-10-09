import Diary from '../pages/diary'
import Home from '../pages/home'
import New from '../pages/new'
import Notfound from '../pages/notfound'
import Edit from '../pages/edit'
import { Route, Routes } from 'react-router-dom'
import { createContext, useReducer, useRef } from 'react'

const mockData = [
  {
    id: 1,
    createdDate: new Date('2024-10-09').getTime(),
    emotionId: 1,
    content: '1 diary'
  },
  {
    id: 2,
    createdDate: new Date('2024-10-08').getTime(),
    emotionId: 2,
    content: '2 diary'
  },
  {
    id: 3,
    createdDate: new Date('2024-09-07').getTime(),
    emotionId: 3,
    content: '3 diary'
  }
]

const diaryReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.payload, ...state]
    case 'EDIT':
      return state.map((prev) => {
        return String(prev.id) === String(action.payload.id)
          ? action.payload
          : prev
      })
    case 'DELETE':
      return state.filter((prev) => String(prev.id) !== String(action.payload))

    default:
      return state
  }
}

const DiaryStateContext = createContext()
const DiaryDispatchContext = createContext()

const EmotionalDiary = () => {
  const [diarys, dispatch] = useReducer(diaryReducer, mockData)
  const idRef = useRef(4)

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

  return (
    <>
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
    </>
  )
}

export default EmotionalDiary
