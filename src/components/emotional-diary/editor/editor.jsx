import './editor.css'
import EmotionItem from '../emotion-item/emotion-item'
import Button from '../elements/button/button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear()
  let month = targetDate.getMonth() + 1
  let date = targetDate.getDate()

  if (month < 10) {
    month = `0${month}`
  }

  if (date < 10) {
    date = `0${date}`
  }

  return `${year}-${month}-${date}`
}

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: ''
  })

  const navigate = useNavigate()

  const handleToChangeInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'createdDate') {
      value = new Date(value)
    }

    setInput({
      ...input,
      [name]: value
    })
  }

  const onClickSubmitButton = () => {
    onSubmit(input)
  }

  return (
    <div className="editor">
      <div className="date_section">
        <h4>Today date</h4>
        <input
          type="date"
          value={getStringedDate(input.createdDate)}
          name="createdDate"
          onChange={handleToChangeInput}
        />
      </div>
      <div className="emotion_section">
        <h4>Today emotion</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((emotion) => (
            <EmotionItem
              onClick={() => {
                handleToChangeInput({
                  target: {
                    name: 'emotionId',
                    value: emotion.emotionId
                  }
                })
              }}
              key={emotion.emotionId}
              {...emotion}
              isSelected={emotion.emotionId === input.emotionId}
            />
          ))}
        </div>
      </div>
      <div className="content_section">
        <h4>Today diary</h4>
        <textarea
          placeholder="How was it today?"
          name="content"
          value={input.content}
          onChange={handleToChangeInput}
        />
      </div>
      <div className="button_section">
        <Button text={'Cancel'} onClick={() => navigate(-1)} />
        <Button text={'Done'} type={'POSITIVE'} onClick={onClickSubmitButton} />
      </div>
    </div>
  )
}

export default Editor
