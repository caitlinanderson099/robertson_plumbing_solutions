import React from 'react'
import SEO from '../components/SEO';


const HotWaterSystems = () => {

  const services = [
    {
      title: "Heat Pump Hot Water Cylinders",
      description:
        "Energy-efficient and eco-friendly, these systems draw heat from the air to warm your water. Enjoy lower power bills and reliable performance year-round.",
    },
    {
      title: "Electric Hot Water Cylinders",
      description:
        "A dependable and cost-effective option for homes and businesses. Provides a steady supply of hot water with modern, insulated designs for energy savings.",
    },
    {
      title: "LPG & Natural Gas Continuous Flow Systems (Infinity)",
      description:
        "Experience endless hot water with systems that heat only when you need it. Compact, efficient, and perfect for busy households or commercial use.",
    },
    {
      title: "Boilers",
      description:
        "Reliable and durable, boilers provide consistent hot water and heating for larger homes or commercial spaces. Designed for efficiency and long-term performance.",
    }
  ];

  // top section
  const TopSection = () => {
    return (
      <div className="hot-water-top">

        <div className="hot-water-left">
          <div className="header">
            <h1>Hot water system services</h1>
            <hr />
          </div>
          <div className="hot-water-services">
            <p className="intro">Reliable Hot Water Solutions for Homes and Businesses</p>

          <p>At Robertson Plumbing Solutions, we provide a full range of hot water systems to suit your home or business — including heat pump hot water cylinders, electric cylinders, LPG and natural gas continuous flow systems, and boilers. Whether you’re upgrading an existing setup or installing a new one, our team helps you find the most efficient and reliable solution for your needs.</p>

          <p>Heat pump hot water systems offer an innovative, energy-efficient way to heat water by transferring warmth from the surrounding air into your water tank. They can reduce electricity use by up to 70% compared to traditional systems, lowering both your running costs and environmental impact. With hybrid options for year-round reliability, they’re ideal for modern, eco-conscious homes.</p>

          <p>For dependable performance, electric and gas continuous flow systems remain popular choices. Electric cylinders deliver steady, affordable hot water and are easy to install in most properties, while gas Infinity systems provide endless hot water on demand — heating only what you need, when you need it. Compact, efficient, and low-maintenance, our hot water solutions are designed to keep your home running comfortably and sustainably.</p>
          </div>
        </div>

        <div className="hot-water-right">
          <img src="/project-images/hot-water4.JPG" alt="" />
        </div>
      </div>
    )
  }

   // bottom section
  const BottomSection = () => (
    <div className="bottom-section">
      <div className="header">
        <h1>Our hot water system services include</h1>
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
        title="Hot Water Systems | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="hot water, systems, NZ, Robertson, plumbing"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
        <div className="hot-water-page">
          <TopSection/>
          <BottomSection/>
        </div>
        
    </>
  )
}

export default HotWaterSystems
