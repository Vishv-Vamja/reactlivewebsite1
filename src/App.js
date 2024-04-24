import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';
import Service from './Service';
import Contactus from './Contactus';
import Footer from './Footer';
import "./App.css"
function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
