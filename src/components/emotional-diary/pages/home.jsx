import Header from '../elements/header/header'
import Button from '../elements/button/button'
import DiaryList from '../diary-list/diary-list'
import { useState } from 'react'

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date())
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
      <DiaryList />
    </div>
  )
}

export default Home
