import React from 'react';
import SEO from '../components/SEO';

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

      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
  <h1>Reliable Plumbing Solutions in Wellington</h1>
  <p>Fast, professional, and affordable plumbing services for your home or business.</p>
  
  <div className="cta-buttons">
    <a href="#testimonialsandgallery" className="cta-button secondary">
      Browse our gallery
    </a>
    <a href="#contactus" className="cta-button primary">
      Get a quote
    </a>
  </div>
</div>
        </section>
      </div>
    </>
  );
};

export default Home;
