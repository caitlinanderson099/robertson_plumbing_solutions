import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa'
import SEO from '../components/SEO';

// SwiperJS imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CertificationSection from '../components/CertificationSection';
import Footer from '../components/Footer';



const TestimonialGallery = () => {

const TestimonialSection = () => {
  const testimonials = [
  {
    name: "John Taylor, Lower Hutt",
    text: "“Robertson Plumbing did an outstanding job installing our new hot water system. They were punctual, professional, and left everything tidy. Highly recommend their services!”",
  },
  {
    name: "Emma Wilson, Upper Hutt",
    text: "“Fantastic service from start to finish. The team quickly identified the drainage issue on our property and had it fixed the same day. Couldn’t be happier with the result.”",
  },
  {
    name: "Liam Carter, Petone",
    text: "“We had a full bathroom renovation completed by Robertson Plumbing and the quality was excellent. Great communication and attention to detail throughout.”",
  },
  {
    name: "Sophie Martin, Wainuiomata",
    text: "“Our water pressure was terrible until these guys came around. They installed a new pump system and it’s made a huge difference — professional, friendly, and efficient.”",
  },
  {
    name: "Ben Roberts, Wellington Central",
    text: "“Really impressed with the level of service. They sorted out our leaking pipes quickly and explained everything clearly. Reliable and great to deal with.”",
  },
];


  return (
    <div className="testimonial-marquee-section">
      <div className="header">
            <h1>What our customers say</h1>
            <hr />
          </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((review, index) => (
            <div className="review-item" key={index}>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
              <div className="star-rating">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const GallerySection = () => {
  const images = [
    "/project-images/central-heating1.webp",
    "/project-images/spouting1.webp",
    "/project-images/infinity2.webp",
    "/project-images/underfloor-heating3.webp",
    "/project-images/spouting3.webp",
    "/project-images/central-heating6.webp",
    "/project-images/infinity5.webp",
    "/project-images/underfloor-heating2.webp",
    "/project-images/rural2.webp",
    "/project-images/hot-water4.webp",
    "/project-images/heatpump1.webp",
    "/project-images/drainage1.webp",
    "/project-images/drainage6.webp",
    "/project-images/bathroom-reno.webp",
    "/project-images/bathroom1.webp",
    "/project-images/bathroom2.webp"
    ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const navigate = useNavigate();
  
      const handleQuote = (e)=> {
          e.preventDefault();
          navigate('/contactus');
      }

  return (
    <div className="gallery-section">
      {/* Left column */}
      <div className="gallery-left">
        <div className="header">
            <h1>Our gallery</h1>
            <hr />
          </div>
        <p>
          Take a look at some of our recent work. From full bathroom
          renovations and drainage installations to heating systems and
          maintenance projects, our gallery showcases the high-quality results
          we deliver for homes and businesses across the Wellington region.
        </p>
          <button onClick={handleQuote}>Get in touch with us today</button>
      </div>

      {/* Right column */}
      <div className="gallery-right">
        <div className="main-gallery">
          {/* Main image */}
          <div className="main-image-wrapper">
            <button className="nav-btn prev" onClick={handlePrev}><FaChevronLeft/></button>

            <img
              key={images[selectedIndex]} // triggers fade transition
              src={images[selectedIndex]}
              alt="Selected"
              className="main-image fade-in"
            />

            <button className="nav-btn next" onClick={handleNext}><FaChevronRight/></button>
          </div>

          {/* Thumbnails */}
          <div className="thumbnail-row">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  index === selectedIndex ? "active" : ""
                }`}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



// MASTER RETURN
    return (
        <>
        <SEO
        title="Testimonials & Gallery | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
    <div className='testimonial-gallery-page'>
              <GallerySection/>

        <TestimonialSection/>
        
    </div>
    <CertificationSection/>
    <Footer/>
    </>
    );
}

export default TestimonialGallery
