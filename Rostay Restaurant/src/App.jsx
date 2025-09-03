import React, { useState } from 'react'
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
import MoreDetails from './components/MoreDetails'
import Dashboard from './dashboard/Dashboard'
import DashboardLayout from './layout/DashboardLayout'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import BlogDashboard from './dashboard/blog/BlogDashboard'
import AddBlog from './dashboard/blog/AddBlog'
import EditBlog from './dashboard/blog/EditBlog'
import Blog from './components/Blog'
import BlogDetails from './components/BlogDetails'

const App = () => {
  // console.log(props.mode);
  const [mode, setMode] = useState(localStorage.getItem('mode'));
  const toggleTheme = () => {
    setMode((curr) => (curr === "light" ? "dark" : "light"));
    if (mode === "light") {
      localStorage.setItem('mode', 'dark');
    }
    else {
      localStorage.setItem('mode', 'light');
    }
  }
  return (

    <div id={mode}>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route element={<MainLayout modeFunction={toggleTheme} mode={mode}/>}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/ourteam' element={<OurTeam />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:title' element={<MoreDetails />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:slug' element={<BlogDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Route>

          <Route element={<NoLayout />}>
            <Route element={<DashboardLayout />} path='/dashboard'>
              <Route path='/dashboard' element={<ProductDashboard />} />
            </Route>
            <Route element={<Dashboard />} path='/dashboard'>
              <Route path='/dashboard/products' element={<ProductDashboard />} />
              <Route path='/dashboard/category' element={<CategoryDashboard />} />
              <Route path='/dashboard/blog' element={<BlogDashboard />} />
              <Route path='/dashboard/category/add' element={<AddCategory />} />
              <Route path='/dashboard/category/edit/:slug' element={<EditCategory />} />
              <Route path='/dashboard/products/add' element={<AddProduct />} />
              <Route path='/dashboard/products/edit/:slug' element={<EditProduct />} />
              <Route path='/dashboard/blog/add' element={<AddBlog />} />
              <Route path='/dashboard/blog/edit/:slug' element={<EditBlog />} />
            </Route>
          </Route>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App