const m1 = -1
const m10 = -10
const m100 = -100
const p1 = +1
const p10 = +10
const p100 = +100

const Controller = ({ handleToClick }) => {
  return (
    <div>
      <button
        onClick={() => {
          handleToClick(m1)
        }}
      >
        {m1}
      </button>
      <button
        onClick={() => {
          handleToClick(m10)
        }}
      >
        {m10}
      </button>
      <button
        onClick={() => {
          handleToClick(m100)
        }}
      >
        {m100}
      </button>
      <button
        onClick={() => {
          handleToClick(p1)
        }}
      >
        {p1}
      </button>
      <button
        onClick={() => {
          handleToClick(p10)
        }}
      >
        {p10}
      </button>
      <button
        onClick={() => {
          handleToClick(p100)
        }}
      >
        {p100}
      </button>
    </div>
  )
}

export default Controller
