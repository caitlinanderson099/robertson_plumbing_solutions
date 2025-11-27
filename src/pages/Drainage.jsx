import React from 'react'
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import CertificationSection from '../components/CertificationSection'


const Drainage = () => {

  const services = [
    {
      title: "New Drainage System Installation",
      description:
        "Expertly designed and installed drainage systems to suit your property layout, ensuring efficient water flow and long-term reliability.",
    },
    {
      title: "Drainage Repairs",
      description:
        "We repair damaged or collapsed drains using quality materials and proven methods to restore full function and prevent further issues.",
    },
    {
      title: "Drain Maintenance & Unblocking",
      description:
        "Keep your drains clear and flowing with regular maintenance and professional unblocking services for long-term performance.",
    },
    {
      title: "Drainage Inspections",
      description:
        "Detailed inspections to identify blockages, damage, or wear early—helping you avoid costly repairs and maintain efficient drainage.",
    },
    {
      title: "Soak Pit Installation & Replacement",
      description:
        "Reliable soak pit solutions for effective stormwater disposal, preventing pooling and water damage around your property.",
    },
    {
      title: "Stormwater Drainage",
      description:
        "Protect your home or business from flooding with efficient stormwater systems that manage heavy rainfall and surface water.",
    },
     {
      title: "Digger & Site Works",
      description:
        "Comprehensive digger and site preparation services to support new drainage installations, repairs, and property development projects.",
    }
  ];

  // top section
  const TopSection = () => {
    return (
      <div className="drainage-top">

        <div className="drainage-left">
          <div className="header">
            <h1>Drainage Services</h1>
            <hr />
          </div>
          <div className="drainage-services">
            <p className="intro">Reliable Drainage Solutions for Every Property</p>

          <p>We provide complete drainage services to keep your property safe, dry, and problem-free. From new installations to repairs and upgrades, our experienced team ensures your drainage system is designed and built to perform efficiently in all weather conditions.</p>

          <p>Blocked or damaged drains can cause serious issues if left unattended. We offer fast, effective drain clearing, unblocking, and repair services, along with routine maintenance and inspections to prevent future problems and keep everything flowing smoothly.</p>

          <p>Our expertise extends to stormwater management, soak pit installation or replacement, and full digger and site works. Whether you’re developing a new site or improving an existing system, we deliver practical, long-lasting drainage solutions tailored to your property’s needs.</p>
          </div>
        </div>

        <div className="drainage-right">
          <img src="/project-images/drainage1.webp" alt="" />
        </div>
      </div>
    )
  }

   // bottom section
  const BottomSection = () => (
    <div className="bottom-section">
      <div className="header">
        <h1>Our drainage services include</h1>
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
        title="Drainage Services | Robertson Plumbing Solutions Ltd"
        description="Get in touch with Robertson Plumbing for residential and commercial plumbing services in Wellington and Upper Hutt."
        keywords="plumber wellington, plumbing, blocked drains, hot water cylinders"
        author="Robertson Plumbing Solutions Ltd"
        image="https://www.robertsonplumbing.co.nz/logo-images/favicon.png"
        url="https://www.robertsonplumbing.co.nz/#/drainage"
      />
        <div className="drainage-page">
          <TopSection/>
          <BottomSection/>
        </div>
        <CertificationSection/>
        <Footer/>
    </>
  )
}

export default Drainage
