import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from '../components/header'
import Footer from '../components/footer'

//Pages
import Home from '../pages/home'
import Housing from '../pages/housing'
import About from '../pages/about'
import Error from '../pages/error'



const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router