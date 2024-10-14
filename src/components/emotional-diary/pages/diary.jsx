import { useNavigate, useParams } from 'react-router-dom'
import useDiary from '../hooks/useDiary'
import { getStringedDate } from '../../../utils/get-stringed-date'
import Button from '../elements/button/button'
import Header from '../elements/header/header'
import Viewer from '../viewer/viewer'

const Diary = () => {
  const params = useParams()
  const navigate = useNavigate()

  const currentDiaryItem = useDiary(params.id)

  if (!currentDiaryItem) {
    return <div>Loading data...</div>
  }

  const { createdDate, emotionId, content } = currentDiaryItem
  const title = getStringedDate(new Date(createdDate))

  return (
    <div>
      <Header
        title={`${title} diary`}
        leftChild={<Button text={'< Back'} onClick={() => navigate(-1)} />}
        rightChild={
          <Button
            text={'Edit'}
            onClick={() => navigate(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  )
}

export default Diary
