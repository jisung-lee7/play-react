import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../editor/editor'
import Button from '../elements/button/button'
import Header from '../elements/header/header'
import {
  DiaryDispatchContext,
  DiaryStateContext
} from '../emotional-diary/emotional-diary'

const Edit = () => {
  const [currentDiaryItem, setCurrentDiaryItem] = useState()
  const params = useParams()
  const diarys = useContext(DiaryStateContext)
  const { handleToEdit, handleToDelete } = useContext(DiaryDispatchContext)
  const navigate = useNavigate()
  const handleToBack = () => {
    navigate(-1)
  }

  const handleToDeleteClick = () => {
    if (
      window.confirm(
        'Are you sure you want to delete diary? This action cannot be undone.'
      )
    ) {
      handleToDelete(params.id)
      navigate('/', { replace: true })
    }
  }

  const onSubmit = (input) => {
    if (window.confirm('Are you sure edit diary?')) {
      handleToEdit(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      )
      navigate('/', { replace: true })
    }
  }

  useEffect(() => {
    const currentDiaryItem = diarys.find(
      (diary) => String(diary.id) === String(params.id)
    )

    if (!currentDiaryItem) {
      window.alert('Invalid access.')
      navigate('/', { replace: true })
    }

    setCurrentDiaryItem(currentDiaryItem)
  }, [params.id, diarys])

  return (
    <div>
      <div>
        <Header
          title={'Edit diary'}
          leftChild={<Button text={'< Back'} onClick={handleToBack} />}
          rightChild={
            <Button
              text={'Delete'}
              type={'NEGATIVE'}
              onClick={handleToDeleteClick}
            />
          }
        />
      </div>
      <div>
        <Editor initDiarys={currentDiaryItem} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Edit
