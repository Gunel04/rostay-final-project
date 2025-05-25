import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './layout/Header'
import HeaderOne from './layout/HeaderOne'

const App = () => {
  return (

    <BrowserRouter>
      <HeaderOne />
      <Routes>

      </Routes>
    </BrowserRouter>

  )
}

export default App