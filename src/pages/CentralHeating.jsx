import React from 'react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO';


const CentralHeating = () => {
  return (
    <>
      <SEO
        title="Central Heating | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
        <PageHeader 
          title="Central heating" 
          backgroundImage="/bg-images/heating-bg.webp" 
        />  
        <div className="centralheating-page">
          <div className="section-header">
            <h2>Our central heating services</h2>
            <hr />
          </div> 
        </div>    
    </>
  )
}

export default CentralHeating
