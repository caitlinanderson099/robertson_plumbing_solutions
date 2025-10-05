import React from 'react'
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader'


const Plumbing = () => {


  return (
    <>
    <SEO
        title="Plumbing | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
        <PageHeader 
          title="Plumbing" 
          backgroundImage="/bg-images/plumbing-bg.webp" 
        /> 
        <div className="plumbing-page">
          <div className="section-header">
            <h2>Our plumbing services</h2>
            <hr />
          </div> 
        </div>
        
    </>
  )
}

export default Plumbing
