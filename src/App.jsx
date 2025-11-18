import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Contact from "./Components/Contact";
import "./App.css";

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
