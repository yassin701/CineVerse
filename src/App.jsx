import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './App.css'
import { BrowserRouter,Routes , Route } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<MovieDetails />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
