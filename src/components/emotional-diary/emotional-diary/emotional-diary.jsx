import Diary from '../pages/diary'
import Home from '../pages/home'
import New from '../pages/new'
import Notfound from '../pages/notfound'
import Edit from '../pages/edit'
import { Route, Routes } from 'react-router-dom'

const EmotionalDiary = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default EmotionalDiary
