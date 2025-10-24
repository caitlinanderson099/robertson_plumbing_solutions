import React from 'react'
import SEO from '../components/SEO';


const Plumbing = () => {

  // top section
  const TopSection = () => {
    return (
      <div className="top-section">

        <div className="left">
          <img src="/project-images/commercial-plumbing2.jpg" alt="" />
        </div>

        <div className="right">
          <div className="header">
            <h1>Plumbing</h1>
            <hr />
          </div>
          <div>
            <p>npsbvosbvobvibvisbvisbvsivbsibcsivbivbiavbaivbiavbaivbaivbi</p>
            <p>npsbvosbvobvibvisbvisbvsivbsibcsivbivbiavbaivbiavbaivbaivbi</p>
          </div>
        </div>
      </div>
    )
  }


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
        </div>
        
    </>
  )
}

export default Plumbing
