import React from 'react'
// ICON IMPORTS
import { MdPlumbing } from "react-icons/md";
import { GiHeatHaze } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { MdGrid4X4 } from "react-icons/md";

import SEO from '../components/SEO';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CertificationSection from '../components/CertificationSection';
import Footer from '../components/Footer';



const About = () => {

  // About Us Section
  const AboutSection = () => {
    const navigate = useNavigate();

    const handleQuote = (e)=> {
        e.preventDefault();
        navigate('/contactus');
    }
    return (
      <div className="about-section">

        <div className="left">
          <img src="/project-images/company-vehicle.jpg" alt="" />
        </div>

        <div className="right">
          <div className="header">
            <h1>About Us</h1>
            <hr />
          </div>
          <p>Robertson Plumbing Solutions is a locally owned company providing high quality and affordable plumbing, drain laying and heating services to the Hutt Valley and wider Wellington region. </p>
          <p>
            We have over 20 years’ experience in residential and commercial projects, and in every job, we take the time to discuss your individual requirements and deliver tailored solutions that last. </p>
          <p>
            Whether it’s a leak, renovation or commercial project, our reliable team is here to provide exceptional plumbing and heating solutions with great communication and a commitment to quality.</p>
          <button onClick={handleQuote}>Get in touch with us today</button>
        </div>
      </div>
    )
  }

  // Services Section
  const ServiceSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

   const services = [
    {
  "title": "Plumbing",
  "description": "We offer a full range of plumbing solutions — from everyday household needs to large-scale commercial maintenance. Our services include tap and pipework repairs, bathroom renovations, water main fixes, and more. \n\nKey services:\n• Tap repairs and replacements\n• Pipework repairs and replacements\n• Leaking water main repairs\n• Bathroom renovations\n• Waste disposal units / Insinkerators\n• Spouting, gutters, and downpipes\n• Water pressure troubleshooting\n• Rainwater harvesting systems\n• Earthquake-ready emergency water tanks\n• Pre-purchase plumbing inspections\n• Commercial plumbing and maintenance\n• Emergency and after-hours services"
},
  {
  "title": "Central Heating",
  "description": "Air to Water Heat Pumps:\n• Energy-efficient heating for homes and businesses\n• Extracts heat from air to supply hot water and warmth\n• Quiet, reliable, and suitable for various property sizes\n\nRadiator Heating Solutions:\n• Gentle, consistent warmth using hot water\n• Energy-efficient and low-maintenance\n• Suitable for renovations and new builds\n\nUnderfloor Heating:\n• Even heat distribution beneath floors\n• Works with many flooring types\n• Low maintenance and quiet operation\n\nContact our team for expert advice and a free quote."
},
  {
  "title": "Hot Water Systems",
  "description": "Heat Pump Hot Water Cylinders:\n• Transfers heat from air to water for energy savings\n• Up to 70% energy savings\n• Backup electric element for consistent supply\n• Provides heating/cooling\n• Eligible for efficiency incentives\n\nElectric Hot Water Cylinders:\n• Reliable electric tanks for consistent hot water\n• Flexible sizing\n• Energy-efficient\n• Easy installation\n• Safety features included\n\nLPG & Natural Gas Continuous Flow (Infinity) Systems:\n• Heats water on demand for endless supply\n• Continuous hot water\n• Energy and cost savings\n• Compact installation\n• Safe, precise temperature control\n• Eco-friendly operation"
},
  {
    title: "Rural",
    "description": [
    "Rural Services",
    "Water solutions for farms and lifestyle properties.",
    
    "Pumps",
    "Ensure reliable supply and pressure.",
    "Types:",
    "• Multistage centrifugal: Household & garden irrigation",
    "• Submersible: Pump from wells or stormwater",
    "• Booster: Maintain pressure for taps & showers",
    "• Circulating: Hot water & underfloor heating",
    "Benefits:",
    "• Reliable, consistent, energy-efficient, durable",
    
    "Rainwater Tanks",
    "Capture and store rainwater for garden, toilets, laundry or drinking (treated).",
    "Benefits:",
    "• Water resilience",
    "• Healthy water for plants",
    "• Various sizes & easy installation",
    
    "Rainwater Filtration",
    "Clean water for home or business.",
    "How it works:",
    "• Pre-filtration: Leaves & debris",
    "• Sediment & carbon: Improve quality & taste",
    "• UV: Neutralises bacteria",
    "Benefits:",
    "• Clean, safe water",
    "• Customizable for property size"
  ]
  },
  {
    title: "Drainage",
    "description": [
      "Our drainage solutions include:",
    
    "• Installment of new drainage systems",
    "• Repair existing drainage systems",
    "• Maintain and unblock drains",
    "• Drainage inspections",
    "• New or replacement soak pits",
    "• Stormwater drainage",
    "• Digger and site works"
  ]
  }
];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

     return (
    <div className="service-section">
      <div className="header">
        <h1>Our Services</h1>
        <hr />
      </div>

      <div className="accordion">
  {services.map((service, index) => (
    <div key={index} className="accordion-item">
      <a
        href="#"
        role="button"
        className={`accordion-title ${activeIndex === index ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault(); // prevents jump to top
          toggleAccordion(index);
        }}
      >
        {service.title}
        <span className="arrow">{activeIndex === index ? "−" : "+"}</span>
      </a>

      <div
        className={`accordion-content ${
          activeIndex === index ? "show" : ""
        }`}
      >
        <p className="accordion-text">{service.description}</p>

      </div>
    </div>
  ))}
</div>

    </div>
  );
};

  return (
    <>
    <SEO
      title="About Us | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"/>
    <div className='about-page'>
    <AboutSection/>
    <ServiceSection/>
    <CertificationSection/>
    </div>
    <Footer/>
    </>
  )
}

export default About