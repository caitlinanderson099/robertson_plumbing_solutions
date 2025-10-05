import React from 'react'
import SEO from '../components/SEO';
import LandingHeader from '../components/LandingHeader'



const Home = () => {
  return (
    <>
      <SEO
        title="Home | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
<div className='home-page'>
      <LandingHeader
        title="Robertson Plumbing Solutions Ltd "
        backgroundImage="/bg-images/landing-bg.webp"
      />
    </div>    </>
  );
}

export default Home
