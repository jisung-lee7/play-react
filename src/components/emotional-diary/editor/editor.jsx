import './editor.css'
import EmotionItem from '../emotion-item/emotion-item'
import Button from '../elements/button/button'

const emotionList = [
  {
    emotionId: 1,
    emotionName: 'Pretty Good'
  },
  {
    emotionId: 2,
    emotionName: 'Good'
  },
  {
    emotionId: 3,
    emotionName: 'So so'
  },
  {
    emotionId: 4,
    emotionName: 'Bad'
  },
  {
    emotionId: 5,
    emotionName: 'Very bad'
  }
]

const Editor = () => {
  const emotionId = 1

  return (
    <div className="editor">
      <div className="date_section">
        <h4>Today date</h4>
        <input type="date" />
      </div>
      <div className="emotion_section">
        <h4>Today emotion</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.emotionId}
              {...emotion}
              isSelected={emotion.emotionId === emotionId}
            />
          ))}
        </div>
      </div>
      <div className="content_section">
        <h4>Today diary</h4>
        <textarea placeholder="How was it today?" />
      </div>
      <div className="button_section">
        <Button text={'Cancel'} />
        <Button text={'Done'} type={'POSITIVE'} />
      </div>
    </div>
  )
}

export default Editor
