import Header from '../elements/header/header'
import Button from '../elements/button/button'
import DiaryList from '../diary-list/diary-list'

const Home = () => {
  return (
    <div>
      <Header
        title={'Oct 2024'}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />
      <DiaryList />
    </div>
  )
}

export default Home
