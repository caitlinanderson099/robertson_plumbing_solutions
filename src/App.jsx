// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Plumbing from './pages/Plumbing';
import './App.css';
import Navbar from './components/NavBar';
import Drainlaying from './pages/Drainlaying'
import CentralHeating from './pages/CentralHeating'
import Contact from './pages/Contact'
import TestimonialGallery from './pages/TestimonialGallery';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/plumbing" element={<Plumbing/>}/>
        <Route path="/drainlaying" element={<Drainlaying/>}/>
        <Route path="/centralheating" element={<CentralHeating/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/testimonialsandgallery" element={<TestimonialGallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
