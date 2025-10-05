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
      <div className='central-heating-page'>
        <PageHeader 
          title="Central heating" 
          backgroundImage="/bg-images/heating-bg.webp" 
        />      
      </div>
    </>
  )
}

export default CentralHeating
