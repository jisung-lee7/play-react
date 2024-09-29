import './header.css'

const Header = () => {
  return (
    <div className="header">
      <h3>Today</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

export default Header
