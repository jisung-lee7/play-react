import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Editor from '../editor/editor'
import Button from '../elements/button/button'
import Header from '../elements/header/header'
import { DiaryDispatchContext } from '../emotional-diary/emotional-diary'
import usePageTitle from '../hooks/usePageTitle'

const New = () => {
  const { handleToCreate } = useContext(DiaryDispatchContext)
  const navigate = useNavigate()
  const handleToBack = () => {
    navigate(-1)
  }

  const onSubmit = (input) => {
    handleToCreate(input.createdDate.getTime(), input.emotionId, input.content)
    navigate('/', { replace: true })
  }

  usePageTitle('Create new diary')

  return (
    <div>
      <div>
        <Header
          title={'Create new diary'}
          leftChild={<Button text={'< Back'} onClick={handleToBack} />}
        />
      </div>
      <div>
        <Editor onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default New
