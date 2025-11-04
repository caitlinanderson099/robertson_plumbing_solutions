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
          <img src="/project-images/company-vehicle.webp" alt="" />
        </div>

        <div className="right">
          <div className="header">
            <h1>About us</h1>
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
    title: "Plumbing",
    description: [
      {
        text: "We offer a full range of plumbing solutions — from everyday household needs to large-scale commercial maintenance."
      },
      {
        subtitle: "Key Services",
        bullets: [
          "Tap repairs and replacements",
          "Pipework repairs and replacements",
          "Leaking water main repairs",
          "Bathroom renovations",
          "Waste disposal units / Insinkerators",
          "Spouting, gutters, and downpipes",
          "Water pressure troubleshooting",
          "Rainwater harvesting systems",
          "Earthquake-ready emergency water tanks",
          "Pre-purchase plumbing inspections",
          "Commercial plumbing and maintenance",
          "Emergency and after-hours services"
        ]
      }
    ]
  },
  {
    title: "Central Heating",
    description: [
      {
        subtitle: "Air to Water Heat Pumps",
        bullets: [
          "Energy-efficient heating for homes and businesses",
          "Extracts heat from air to supply hot water and warmth",
          "Quiet, reliable, and suitable for various property sizes"
        ]
      },
      {
        subtitle: "Radiator Heating Solutions",
        bullets: [
          "Gentle, consistent warmth using hot water",
          "Energy-efficient and low-maintenance",
          "Suitable for renovations and new builds"
        ]
      },
      {
        subtitle: "Underfloor Heating",
        bullets: [
          "Even heat distribution beneath floors",
          "Works with many flooring types",
          "Low maintenance and quiet operation"
        ]
      },
      {
        text: "Contact our team for expert advice and a free quote."
      }
    ]
  },
  {
    title: "Hot Water Systems",
    description: [
      {
        subtitle: "Heat Pump Hot Water Cylinders",
        bullets: [
          "Transfers heat from air to water for energy savings",
          "Up to 70% energy savings",
          "Backup electric element for consistent supply",
          "Provides heating/cooling",
          "Eligible for efficiency incentives"
        ]
      },
      {
        subtitle: "Electric Hot Water Cylinders",
        bullets: [
          "Reliable electric tanks for consistent hot water",
          "Flexible sizing",
          "Energy-efficient",
          "Easy installation",
          "Safety features included"
        ]
      },
      {
        subtitle: "LPG & Natural Gas Continuous Flow (Infinity) Systems",
        bullets: [
          "Heats water on demand for endless supply",
          "Continuous hot water",
          "Energy and cost savings",
          "Compact installation",
          "Safe, precise temperature control",
          "Eco-friendly operation"
        ]
      }
    ]
  },
  {
    title: "Rural",
    description: [
      {
        subtitle: "Rural Services",
        text: "Water solutions for farms and lifestyle properties."
      },
      {
        subtitle: "Pumps",
        bullets: [
          "Ensure reliable supply and pressure",
          "Types:",
          "• Multistage centrifugal: Household & garden irrigation",
          "• Submersible: Pump from wells or stormwater",
          "• Booster: Maintain pressure for taps & showers",
          "• Circulating: Hot water & underfloor heating",
          "Benefits: Reliable, consistent, energy-efficient, durable"
        ]
      },
      {
        subtitle: "Rainwater Tanks",
        bullets: [
          "Capture and store rainwater for garden, toilets, laundry or drinking (treated)",
          "Benefits: Water resilience, healthy water for plants, various sizes & easy installation"
        ]
      },
      {
        subtitle: "Rainwater Filtration",
        bullets: [
          "Clean water for home or business",
          "How it works:",
          "• Pre-filtration: Leaves & debris",
          "• Sediment & carbon: Improve quality & taste",
          "• UV: Neutralises bacteria",
          "Benefits: Clean, safe water, customizable for property size"
        ]
      }
    ]
  },
  {
    title: "Drainage",
    description: [
      {
        text: "Our drainage solutions include:",
        bullets: [
          "Installment of new drainage systems",
          "Repair existing drainage systems",
          "Maintain and unblock drains",
          "Drainage inspections",
          "New or replacement soak pits",
          "Stormwater drainage",
          "Digger and site works"
        ]
      }
    ]
  }
];

const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Helper to render description content
  const renderDescription = (desc) => {
    return desc.map((item, idx) => (
      <div key={idx} className="service-desc-item">
        {item.subtitle && <h3 className="service-subtitle">{item.subtitle}</h3>}
        {item.text && <p className="service-text">{item.text}</p>}
        {item.bullets && (
          <ul className="service-bullets">
            {item.bullets.map((bullet, bIdx) => (
              <li key={bIdx}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

      return (
    <div className="service-section">
      <div className="header">
        <h1>Our Services</h1>
        <hr />
      </div>

      <div className="accordion">
  {services.map((service, index) => (
    <div
      key={index}
      className={`accordion-item ${activeIndex === index ? "active" : ""}`}
      onClick={() => toggleAccordion(index)}
    >
      <div className="accordion-title">
        {service.title}
        <span className="arrow">{activeIndex === index ? "−" : "+"}</span>
      </div>

      <div className={`accordion-content ${activeIndex === index ? "show" : ""}`}>
        {renderDescription(service.description)}
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