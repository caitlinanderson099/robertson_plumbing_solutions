import React from 'react'
import SEO from '../components/SEO';
import LandingHeader from '../components/LandingHeader'

// NOTE = WILL EVENTUALLY ADD LINE HOVER TO NAVLINKS, AND REACT UI COMPONENT FOR TESTIMONIALS

const Home = () => {
  return (
    <>
      <SEO
        title="Robertson Plumbing Solutions | Wellington"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
<div className='home-page'>
      <LandingHeader
        title="Robertson Plumbing Solutions Ltd "
        backgroundImage="/bg-images/landing-bg.jpg"
      />
    </div>    </>
  );
}

export default Home
