import Editor from '../editor/editor'
import Button from '../elements/button/button'
import Header from '../elements/header/header'

const New = () => {
  return (
    <div>
      <div>
        <Header
          title={'Create new diary'}
          leftChild={<Button text={'< Back'} />}
        />
      </div>
      <div>
        <Editor />
      </div>
    </div>
  )
}

export default New
