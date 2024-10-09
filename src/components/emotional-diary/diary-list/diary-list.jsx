import './diary-list.css'
import DiaryItem from '../diary-item/diary-item'
import Button from '../elements/button/button'

const DiaryList = () => {
  return (
    <div className="diary-list">
      <div className="menu_bar">
        <select>
          <option value={'latest'}>Latest</option>
          <option value={'oldest'}>Oldest</option>
        </select>
        <Button text={'Create diary'} type={'POSITIVE'} />
      </div>
      <div className="list-wrapper">
        <DiaryItem />
      </div>
    </div>
  )
}

export default DiaryList
