import './editor.css'
import EmotionItem from '../emotion-item/emotion-item'
import Button from '../elements/button/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emotionList } from '../../../utils/constants'
import { getStringedDate } from '../../../utils/get-stringed-date'

const Editor = ({ initDiarys, onSubmit }) => {
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

  useEffect(() => {
    if (initDiarys) {
      setInput({
        ...initDiarys,
        createdDate: new Date(Number(initDiarys.createdDate))
      })
    }
  }, [initDiarys])

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
