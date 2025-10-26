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
          title="Welcome to Robertson Plumbing Solutions Ltd"
          subHeading="Our reliable team is here to provide exceptional plumbing and heating solutions with great communication and a commitment to quality."
          backgroundImage="/bg-images/landing-bg.jpg"
        />
    </div>    
    </>
  );
}

export default Home
