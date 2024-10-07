import { useParams } from 'react-router-dom'

const Edit = () => {
  const params = useParams()
  return <div>{params.id}'s diary'</div>
}

export default Edit
