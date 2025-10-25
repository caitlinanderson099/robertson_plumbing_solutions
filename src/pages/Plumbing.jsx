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
      <div className="top-section">

        <div className="left">
          <img src="/project-images/commercial-plumbing1.jpg" alt="" />
        </div>

        <div className="right">
          <div className="header">
            <h1>Plumbing services</h1>
            <hr />
          </div>
          <div className="plumbing-services">
          <p>At Robertson Plumbing Solutions, we take pride in offering reliable and high-quality plumbing services across the Hutt Valley and wider Wellington region. With over 20 years of experience in both residential and commercial projects, our skilled team understands that every job is unique. We take the time to listen to your needs, ensuring each solution is tailored to suit your home or business — from simple repairs to complete plumbing installations.</p>

          <p>Our team provides a full range of plumbing services, including tap and pipework repairs, bathroom renovations, water main repairs, and emergency callouts. We also handle specialist solutions such as rainwater harvesting systems, earthquake-ready water tanks, and ongoing commercial maintenance. Whether you’re tackling a small household issue or managing a large-scale project, Robertson Plumbing Solutions is committed to delivering quality workmanship, transparent communication, and results that stand the test of time.</p>

          <p>At Robertson Plumbing Solutions, we believe great service goes beyond fixing pipes — it’s about building trust with every customer. Our locally owned business is founded on honesty, reliability, and attention to detail. From the moment you get in touch, we’ll guide you through the process, provide clear communication, and ensure your project is completed efficiently and to the highest standard. No matter the size or scope of the job, you can count on our experienced team to deliver lasting plumbing solutions with genuine care and professionalism.</p>
          </div>

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
