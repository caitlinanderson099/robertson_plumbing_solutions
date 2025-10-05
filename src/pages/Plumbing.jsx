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
      <div>
        <PageHeader 
          title="Plumbing" 
          backgroundImage="/bg-images/plumbing-bg.webp" 
        />      
      </div>
    </>
  )
}

export default Plumbing
