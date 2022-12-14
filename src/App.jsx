import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/NavBar'
import AppRoutes from './routes'
import category from './api'

function App() {

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
