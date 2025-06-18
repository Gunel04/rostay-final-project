import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Home from './components/Home'
import Footer from './layout/Footer'
import AboutUs from './components/AboutUs'
import OurTeam from './components/OurTeam'

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/ourteam' element={<OurTeam />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App