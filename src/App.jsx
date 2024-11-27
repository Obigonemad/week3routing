import './App.css'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/booklist">Booklist</Link>
      <Link to="/addbook">Add Book</Link>
      <Link to="/findbook">Find Book</Link>
    </header>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
