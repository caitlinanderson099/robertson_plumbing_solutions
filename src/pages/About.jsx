import React from 'react'
// ICON IMPORTS
import { MdPlumbing } from "react-icons/md";
import { GiHeatHaze } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { MdGrid4X4 } from "react-icons/md";

import SEO from '../components/SEO';

import { useState } from 'react';


const About = () => {

  // About Us Section
  const AboutSection = () => {
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
        </div>
      </div>
    )
  }

  // Services Section
  const ServiceSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

   const services = [
  {
    title: "Plumbing",
    description: [
      "We provide a range of plumbing solutions from everyday household services to commercial plumbing and maintenance, including:",
      "• Tap repairs and replacements",
      "• Pipework repairs and replacements",
      "• Leaking water main repairs",
      "• Bathroom renovations",
      "• Waste disposal/insinkerators",
      "• Spouting, gutters and downpipes",
      "• Water pressure problems",
      "• Rainwater harvesting",
      "• Earthquake emergency rainwater tanks",
      "• Pre-purchase inspections",
      "• Commercial maintenance and plumbing",
      "• Emergency/Out of hours services"
    ]
  },
  {
    title: "Central Heating",
     "description": [
    "Air to Water Heat Pumps",
    "Energy-efficient heating for homes and businesses, extracting heat from the air to supply hot water and warmth—even in cold conditions.",
    "Uses electricity to move heat rather than generate it, reducing energy bills and environmental impact.",
    "Modern models are quiet, reliable, and suitable for various property sizes, offering year-round comfort with lower running costs.",
    
    "Radiator Heating Solutions",
    "Modern radiators provide gentle, consistent warmth using hot water. They are energy-efficient, low-maintenance, quiet, and adaptable to different property sizes and styles.",
    "Key benefits:",
    "• Even, comfortable heat",
    "• Energy-efficient",
    "• Low maintenance",
    "• Suitable for renovations and new builds",
    
    "Underfloor Heating",
    "Circulates hot water beneath floors for even, cozy warmth throughout your space. Ideal for new builds or renovations, compatible with many flooring types, and quiet to operate.",
    "Key benefits:",
    "• Even heat distribution",
    "• Energy-efficient",
    "• Low maintenance and quiet",
    "• Works with various flooring types",
    
    "Contact our team for expert advice and a free quote on any system."
  ]
  },
  {
    title: "Hot Water Systems",
   "description": [
    "Hot Water Systems",
    "Solutions for efficient hot water in homes and businesses.",
    
    "Heat Pump Hot Water Cylinders",
    "Transfers heat from air to water for energy savings and eco-friendly operation.",
    "Key benefits:",
    "• Up to 70% energy savings",
    "• Backup electric element for consistent supply",
    "• Provides heating/cooling",
    "• Eligible for efficiency incentives",
    
    "Electric Hot Water Cylinders",
    "Reliable electric tanks for consistent hot water.",
    "Key benefits:",
    "• Flexible sizing",
    "• Energy-efficient",
    "• Easy installation",
    "• Safety features included",
    
    "LPG & Natural Gas Continuous Flow (Infinity) Systems",
    "Heats water on demand for endless supply.",
    "Key benefits:",
    "• Continuous hot water",
    "• Energy and cost savings",
    "• Compact installation",
    "• Safe, precise temperature control",
    "• Eco-friendly operation"
  ]
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
            <button
              className={`accordion-title ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {service.title}
              <span className="arrow">{activeIndex === index ? "−" : "+"}</span>
            </button>

            <div
              className={`accordion-content ${
                activeIndex === index ? "show" : ""
              }`}
            >
{service.description.map((line, i) => (
    <p key={i}>{line}</p>
  ))}            </div>
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
    </div>
    </>
  )
}

export default About