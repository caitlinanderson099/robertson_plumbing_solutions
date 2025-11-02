import React from 'react'
import SEO from '../components/SEO';
import Footer from '../components/Footer';


const Heating = () => {

  const heatingServices = [
  {
    title: "Air to Water Heat Pumps",
    description:
      "Energy-efficient systems that extract heat from the air to warm your home and water supply, reducing energy costs and environmental impact.",
  },
  {
    title: "Radiator Heating",
    description:
      "Reliable, quiet, and low-maintenance heating that evenly distributes warmth throughout your space — ideal for new builds or renovations.",
  },
  {
    title: "Underfloor Heating",
    description:
      "Delivers gentle, consistent warmth across every room by circulating hot water beneath your floors for year-round comfort.",
  },
  {
    title: "Gas Boiler Installations",
    description:
      "Efficient gas boiler systems designed to provide consistent heating and hot water with professional installation and servicing.",
  },
  {
    title: "Diesel Boiler Installations",
    description:
      "Durable and powerful heating solutions ideal for larger homes or commercial spaces, offering dependable performance and longevity.",
  },
  {
    title: "Heating System Upgrades & Maintenance",
    description:
      "Keep your system running efficiently with regular servicing, repairs, and upgrades tailored to your property’s heating needs.",
  },
];



  // top section
  const HeatingTopSection = () => {
    return (
      <div className="heating-top">

        <div className="heating-left"> 
          <div className="header">
            <h1>Heating services</h1>
            <hr />
          </div>
          <div className="heating-services">
            <p className="intro">Heating Solutions You Can Rely On</p>

          <p>At Robertson Plumbing Solutions, we deliver efficient, high-quality heating services across the Hutt Valley and Wellington region. With over 20 years of residential and commercial experience, our team provides tailored solutions to suit your home, lifestyle, and budget.</p>

          <p>We install and service air to water heat pumps, radiator systems, underfloor heating, and gas or diesel boilers — all designed for year-round comfort and long-lasting performance.</p>

          <p>Enjoy lower energy costs and eco-friendly operation with air to water heat pumps, steady and efficient warmth with radiator heating, or even, gentle heat throughout your space with underfloor heating.</p>

          <p>Whatever your choice, you can count on Robertson Plumbing Solutions for expert advice, clear communication, and results that last.</p>
          </div>
        </div>

        <div className="heating-right">
          <img src="/project-images/central-heating5.JPG" alt="" />
        </div>
      </div>
    )
  }

  // bottom section
  const HeatingBottomSection = () => (
    <div className="bottom-section">
      <div className="header">
        <h1>Our heating services include</h1>
        <hr />
      </div>
      <div className="services-cont">
        {heatingServices.map((service, index) => (
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
        title="Central Heating | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
        <div className="heating-page">
          <HeatingTopSection/>
          <HeatingBottomSection/>
        </div>   
        <Footer/> 
    </>
  )
}

export default Heating
