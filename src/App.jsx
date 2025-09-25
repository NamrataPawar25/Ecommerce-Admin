import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import NavbarTop from './components/NavbarTop'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'

function App() {
    const [isRegister, setIsRegister] = useState(false)
  return (
    <>
     <BrowserRouter>
     <AuthProvider>
      <NavbarTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/register' element={<Registration setIsRegister={setIsRegister} />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
