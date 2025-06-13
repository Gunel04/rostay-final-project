import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Home from './components/Home'
import Footer from './layout/Footer'
import AboutUs from './components/AboutUs'

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App