import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter,Routes , Route } from 'react-router-dom'

import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
