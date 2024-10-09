import './diary-list.css'
import DiaryItem from '../diary-item/diary-item'
import Button from '../elements/button/button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const DiaryList = ({ filteredDiarys }) => {
  const navigate = useNavigate()
  const [sortType, setSortType] = useState('latest')

  const handleToSortType = (e) => {
    setSortType(e.target.value)
  }

  const getSortedDiarys = () => {
    return filteredDiarys.toSorted((a, b) => {
      if (sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate)
      } else {
        return Number(b.createdDate) - Number(a.createdDate)
      }
    })
  }

  const sortedDiarys = getSortedDiarys()
  return (
    <div className="diary-list">
      <div className="menu_bar">
        <select onChange={handleToSortType}>
          <option value={'latest'}>Latest</option>
          <option value={'oldest'}>Oldest</option>
        </select>
        <Button
          text={'Create diary'}
          type={'POSITIVE'}
          onClick={() => navigate('/new')}
        />
      </div>
      <div className="list-wrapper">
        {sortedDiarys.map((diary) => {
          return (
            <DiaryItem
              key={diary.id}
              // id={diary.id}
              // createdDate={diary.createdDate}
              // emotionId={diary.emotionId}
              // content={diary.content}
              {...diary}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DiaryList
