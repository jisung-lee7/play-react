import './viewer.css'
import { getEmotionImage } from '../../../utils/get-emotion-image'
import { emotionList } from '../../../utils/constants'

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (emotion) => String(emotion.emotionId) === String(emotionId)
  )
  return (
    <div className="viewer">
      <div className="img_section">
        <h4>Today emotion</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </div>
      <div className="content_section">
        <h4>Today diary</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Viewer
