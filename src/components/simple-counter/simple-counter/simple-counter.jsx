import { useState } from 'react'
import Viewer from '../viewer/viewer'
import Controller from '../controller/controller'
import './simple-counter.css'

const SimpleCounter = () => {
  const [count, setCount] = useState(0)
  const handleToClick = (num) => {
    setCount((prev) => prev + num)
  }
  return (
    <div className="simple-counter">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleToClick={handleToClick} />
      </section>
    </div>
  )
}

export default SimpleCounter
