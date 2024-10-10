import './emotion-item.css'
import { getEmotionImage } from '../../../utils/get-emotion-image'

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`emotion-item ${isSelected ? `emotion-item_on_${emotionId}` : ''}`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  )
}

export default EmotionItem
