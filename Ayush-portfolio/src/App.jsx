import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedCursor from './components/AnimatedCursor'

const App = () => {
  return (
    <div className="app-shell">
      <AnimatedCursor />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
