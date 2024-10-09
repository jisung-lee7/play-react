import './diary-item.css'
import { getEmotionImage } from '../../../utils/get-emotion-image'
import Button from '../elements/button/button'

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  return (
    <div className="diary-item">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={'edit'} />
      </div>
    </div>
  )
}

export default DiaryItem
