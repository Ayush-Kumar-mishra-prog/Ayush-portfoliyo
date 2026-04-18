import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.body.classList.toggle('theme-dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="app-shell">
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((currentTheme) => !currentTheme)}
      />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
