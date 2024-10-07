import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Diary from '../pages/diary'
import Home from '../pages/home'
import New from '../pages/new'
import Notfound from '../pages/notfound'
import Edit from '../pages/edit'

const EmotionalDiary = () => {
  const nav = useNavigate()
  const handleToClick = () => {
    nav('/new')
  }
  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={handleToClick}>Navigate to a new page</button>
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
