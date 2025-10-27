import React from 'react'
import SEO from '../components/SEO';


const Plumbing = () => {

  const services = [
    {
      title: "Tap Repairs & Replacements",
      description:
        "We repair or replace leaking, dripping, or damaged taps using quality fittings for a lasting fix.",
    },
    {
      title: "Pipework Repairs & Replacements",
      description:
        "From minor leaks to full pipe replacements, our team ensures reliable and efficient water flow throughout your property.",
    },
    {
      title: "Leaking Water Main Repairs",
      description:
        "We quickly locate and repair water main leaks to prevent property damage and reduce water loss.",
    },
    {
      title: "Bathroom Renovations",
      description:
        "Upgrade your space with professional plumbing installation for bathroom remodels and new builds.",
    },
    {
      title: "Waste Disposal / Insinkerators",
      description:
        "We install and service waste disposal units for efficient kitchen waste management and convenience.",
    },
    {
      title: "Spouting, Gutters & Downpipes",
      description:
        "Keep your home safe from water damage with our expert gutter, spouting, and downpipe repairs or installations.",
    },
    {
      title: "Water Pressure Problems",
      description:
        "We diagnose and fix low or fluctuating water pressure to ensure consistent and efficient flow.",
    },
    {
      title: "Rainwater Harvesting",
      description:
        "Install a sustainable rainwater system to collect and reuse water for gardens or household use.",
    },
    {
      title: "Earthquake Emergency Rainwater Tanks",
      description:
        "We supply and install emergency rainwater tanks to ensure your home is prepared for natural disasters.",
    },
    {
      title: "Pre-purchase Inspections",
      description:
        "Comprehensive plumbing checks before you buy a property, helping you avoid costly surprises later.",
    },
    {
      title: "Commercial Maintenance & Plumbing",
      description:
        "Tailored plumbing solutions for businesses, including regular maintenance and emergency support.",
    },
    {
      title: "Emergency / Out-of-hours Services",
      description:
        "Available when you need us most — prompt and reliable service for urgent plumbing issues.",
    },
  ];

  // top section
  const TopSection = () => {
    return (
      <div className="plumbing-top">

        <div className="plumbing-left">
          <div className="header">
            <h1>Plumbing services</h1>
            <hr />
          </div>
          <div className="plumbing-services">
            <p className="intro">Reliable Plumbing for Every Home and Business</p>

          <p>At Robertson Plumbing Solutions, we deliver reliable, high-quality plumbing services across the Hutt Valley and Wellington region. With over 20 years of experience in both residential and commercial projects, our skilled team provides tailored solutions designed to meet your home or business needs — from quick repairs to full plumbing installations.</p>

          <p>We offer a complete range of services, including tap and pipe repairs, bathroom renovations, water main repairs, and emergency callouts. Our team also provides specialist plumbing solutions such as rainwater harvesting systems, earthquake-ready water tanks, and regular commercial maintenance, ensuring your property’s plumbing runs efficiently and reliably.</p>

          <p>No matter the size of the job, you can count on Robertson Plumbing Solutions for clear communication, quality workmanship, and lasting results — keeping your home or business flowing smoothly year-round.</p>
          </div>
        </div>

        <div className="plumbing-right">
          <img src="/project-images/commercial-plumbing1.jpg" alt="" />
        </div>
      </div>
    )
  }

   // bottom section
  const BottomSection = () => (
    <div className="bottom-section">
      <div className="header">
        <h1>Our plumbing services include</h1>
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
        title="Plumbing | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
        <div className="plumbing-page">
          <TopSection/>
          <BottomSection/>
        </div>
        
    </>
  )
}

export default Plumbing
