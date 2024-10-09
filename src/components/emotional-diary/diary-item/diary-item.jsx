import './diary-item.css'
import { getEmotionImage } from '../../../utils/get-emotion-image'
import Button from '../elements/button/button'
import { useNavigate } from 'react-router-dom'

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const navigate = useNavigate()
  return (
    <div className="diary-item">
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => navigate(`/diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section" onClick={() => navigate(`/diary/${id}`)}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => navigate(`/edit/${id}`)} text={'edit'} />
      </div>
    </div>
  )
}

export default DiaryItem
