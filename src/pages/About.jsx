import React from 'react'
import PageHeader from '../components/PageHeader'
import { FaWrench } from 'react-icons/fa'
import { FaTemperatureThreeQuarters } from 'react-icons/fa6'
import { PiGridNineLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';


const About = () => {

  // Services Section
  const ServiceSection = () => {
    return (
      <div className="services-section">
        <div className="section-header">
          <h2>Our services</h2>
          <hr />
        </div>
        <div className="services-cont">
          <div className="service-item">
            <FaWrench />
            <h4>Plumbing & Maintenance</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>

          <div className="service-item">
            <FaTemperatureThreeQuarters />
            <h4>Central heating</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>

          <div className="service-item">
            <PiGridNineLight />
            <h4>Drainlaying</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
          </div>
        </div>
      </div>
    )
  }

  const navigate = useNavigate();

  const handleContact = (e) => {
    e.preventDefault();
    navigate('/contactus');
  }

  // Our History Section
  const HistorySection = () => {
    return (
      <div className="history-section">
        <div className="section-header">
          <h2>Our history</h2>
          <hr />
        </div>
        <div className="history-content">
          <p>(this is where there will be a couple of images and blurb about the company and its history...)</p>
          <button onClick={handleContact}>Get in touch with us</button>
        </div>
      </div>
    )
  }

  // Image Scroll Section #1
  const ImageScroll1 = () => <div className="image-scroll"></div>


  // MASTER RETURN
  return (
    <>
    <SEO
        title="About Us | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
      />
    <div className='about-page'>
      <PageHeader 
        title="About us" 
        backgroundImage="/bg-images/about-bg.webp" 
      />  
      <ServiceSection/>  
      {/* <ImageScroll1/> */}
      <HistorySection/>
    </div>
    </>
  )
}

export default About