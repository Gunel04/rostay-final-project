import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Home from './components/Home'
import Footer from './layout/Footer'
import AboutUs from './components/AboutUs'
import OurTeam from './components/OurTeam'
import Login from './components/authComponents/Login'
import Register from './components/authComponents/Register'
import ContactUs from './components/ContactUs'
import Reservation from './components/Reservation'

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/ourteam' element={<OurTeam />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App