import { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { DiaryStateContext } from '../emotional-diary/emotional-diary'

const useDiary = (id) => {
  const diarys = useContext(DiaryStateContext)
  const [currentDiaryItem, setCurrentDiaryItem] = useState()

  useEffect(() => {
    const currentDiaryItem = diarys.find(
      (diary) => String(diary.id) === String(id)
    )

    if (!currentDiaryItem) {
      window.alert('Invalid access.')
      Navigate('/', { replace: true })
    }

    setCurrentDiaryItem(currentDiaryItem)
  }, [id, diarys])

  return currentDiaryItem
}

export default useDiary
