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
import Shop from './components/Shop'
import MainLayout from './layout/MainLayout'
import NoLayout from './layout/NoLayout'
import CategoryDashboard from './dashboard/category/CategoryDashboard'
import AddCategory from './dashboard/category/AddCategory'
import EditCategory from './dashboard/category/EditCategory'
import ProductDashboard from './dashboard/product/ProductDashboard'
import AddProduct from './dashboard/product/AddProduct'
import EditProduct from './dashboard/product/EditProduct'

const App = () => {
  return (

    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/ourteam' element={<OurTeam />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/shop' element={<Shop />} />
        </Route>

        <Route element={<NoLayout />}>
          <Route path='/dashboard/category' element={<CategoryDashboard />} />
          <Route path='/dashboard/category/add' element={<AddCategory />} />
          <Route path='/dashboard/category/edit/:slug' element={<EditCategory />} />
          <Route path='/dashboard/products' element={<ProductDashboard />} />
          <Route path='/dashboard/products/add' element={<AddProduct />} />
          <Route path='/dashboard/products/edit/:slug' element={<EditProduct />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>

  )
}

export default App