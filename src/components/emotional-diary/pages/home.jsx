import Header from '../elements/header/header'
import Button from '../elements/button/button'
import { useContext, useState } from 'react'
import { DiaryStateContext } from '../emotional-diary/emotional-diary'
import DiaryList from '../diary-list/diary-list'

const getMonthlyDiary = (pivotDate, diarys) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime()
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime()

  return diarys.filter(
    (diary) => beginTime <= diary.createdDate && diary.createdDate <= endTime
  )
}

const Home = () => {
  const diarys = useContext(DiaryStateContext)
  const [pivotDate, setPivotDate] = useState(new Date())
  const filteredDiarys = getMonthlyDiary(pivotDate, diarys)
  const handleToDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  const handleToIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }

  return (
    <div>
      <Header
        title={`${pivotDate.getMonth() + 1} ${pivotDate.getFullYear()}`}
        leftChild={<Button text={'<'} onClick={handleToDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={handleToIncreaseMonth} />}
      />
      <DiaryList filteredDiarys={filteredDiarys} />
    </div>
  )
}

export default Home
