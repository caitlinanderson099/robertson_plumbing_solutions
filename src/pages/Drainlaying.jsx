import React from 'react'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO';


const Drainlaying = () => {
  return (
    <>
      <SEO
        title="Drainlaying | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
      <div>
        <PageHeader 
          title="Drainlaying" 
          backgroundImage="/bg-images/drainlaying-bg.webp" 
        />      
      </div>
    </>
  )
}

export default Drainlaying
