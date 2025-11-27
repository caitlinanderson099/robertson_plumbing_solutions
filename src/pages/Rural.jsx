import React from 'react'
import SEO from '../components/SEO';

import Footer from '../components/Footer';
import CertificationSection from '../components/CertificationSection'


const Rural = () => {

  const services = [
    {
      title: "Home Water Pumps",
      description:
        "Ensure a consistent and reliable water supply across your property. From boosting water pressure to managing irrigation, we supply and install durable, energy-efficient pumps suited to every rural need.",
    },
    {
      title: "Rainwater Collection Tanks",
      description:
        "Capture and store rainwater straight from your roof for garden use, household supply, or emergencies. We offer a range of tank sizes and styles, designed for easy installation and long-lasting performance.",
    },
    {
      title: "Rainwater Filtration Systems",
      description:
        "Enjoy clean, fresh water with our multi-stage filtration systems. These remove debris, sediment, and bacteria—providing safe, eco-friendly water for your home or business.",
    },
    {
      title: "Stormwater & Run-Off Solutions",
      description:
        "Protect your land and property with effective stormwater management. Our systems control paddock run-off, reduce flooding risks, and help maintain healthy soil and waterways.",
    },
    {
      title: "Water Troughs & Farm Plumbing",
      description:
        "Keep your livestock supplied with reliable, well-installed water troughs and plumbing systems built for rural conditions and daily use.",
    }
  ];

  // top section
  const TopSection = () => {
    return (
      <div className="rural-top">

        <div className="rural-left">
          <div className="header">
            <h1>Rural Services</h1>
            <hr />
          </div>
          <div className="rural-services">
            <p className="intro">Reliable Water and Plumbing Solutions for Rural Lifestyles</p>

          <p>We provide reliable plumbing solutions tailored for rural homes, farms, and lifestyle blocks. Our services include pump supply and installation, water tanks, filtration systems, stormwater management, paddock run-off solutions, and water trough setups—everything you need to keep your property running smoothly.</p>

          <p>From boosting water pressure to managing irrigation, we supply and install efficient home water pumps designed for every need. Pair your system with a rainwater collection tank to capture and store water for household or garden use. With modern, low-maintenance options available, we’ll help you choose the right setup to keep your home water supply consistent, efficient, and sustainable.</p>

          <p>Our rainwater filtration systems use advanced multi-stage technology to remove debris, sediment, and bacteria—delivering clean, fresh water for your household or business. Whether you’re upgrading an existing system or starting from scratch, our team can design a reliable solution to improve water quality and reduce reliance on mains supply.</p>
          </div>
        </div>

        <div className="rural-right">
          <img src="/project-images/rural2.webp" alt="" />
        </div>
      </div>
    )
  }

   // bottom section
  const BottomSection = () => (
    <div className="bottom-section">
      <div className="header">
        <h1>Our rural services include</h1>
        <hr />
      </div>
      <div className="services-cont">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );


  return (
    <>
    <SEO
        title="Rural Services | Robertson Plumbing Solutions Ltd"
        description="Get in touch with Robertson Plumbing for residential and commercial plumbing services in Wellington and Upper Hutt."
        keywords="plumber wellington, plumbing, blocked drains, hot water cylinders"
        author="Robertson Plumbing Solutions Ltd"
        image="https://www.robertsonplumbing.co.nz/logo-images/favicon.png"
        url="https://www.robertsonplumbing.co.nz/#/rural"
      />
        <div className="rural-page">
          <TopSection/>
          <BottomSection/>
        </div>
        <CertificationSection/>
        <Footer/>
        
    </>
  )
}

export default Rural
