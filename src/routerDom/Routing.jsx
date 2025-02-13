import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import Signuppage from '../pages/Signup'
import Login from '../pages/Login'

const Routing = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/About" element={ <About/> } />
            <Route path="/Contact" element={ <Contact/> } />
            <Route path="/Signup" element={ <Signuppage/> } />
            <Route path="/Login" element={ <Login/> } />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Routing
