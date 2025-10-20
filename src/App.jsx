import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// PAGE IMPORTS
import Home from './pages/Home';
import About from './pages/About';
import Plumbing from './pages/Plumbing';
import Drainage from './pages/Drainage'
import CentralHeating from './pages/CentralHeating'
import Contact from './pages/Contact'
import TestimonialGallery from './pages/TestimonialGallery';
import HotWaterSystems from './pages/HotWaterSystems'
import Rural from './pages/Rural';

// import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        {/* Drop Down Pages */}
        <Route path="/plumbing" element={<Plumbing/>}/>
        <Route path="/drainage" element={<Drainage/>}/>
        <Route path="/centralheating" element={<CentralHeating/>}/>
        <Route path="/hotwatersystems" element={<HotWaterSystems/>}/>
        <Route path="/rural" element={<Rural/>}/>
        {/* Normal Pages */}
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/testimonialsandgallery" element={<TestimonialGallery/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
