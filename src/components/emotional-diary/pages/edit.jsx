import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useDiary from '../hooks/useDiary'
import Editor from '../editor/editor'
import Button from '../elements/button/button'
import Header from '../elements/header/header'
import { DiaryDispatchContext } from '../emotional-diary/emotional-diary'
import usePageTitle from '../hooks/usePageTitle'

const Edit = () => {
  const params = useParams()
  const { handleToEdit, handleToDelete } = useContext(DiaryDispatchContext)
  const navigate = useNavigate()
  const currentDiaryItem = useDiary(params.id)
  usePageTitle(`Edit ${params.id}'s diary`)

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
