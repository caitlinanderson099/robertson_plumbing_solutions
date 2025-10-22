import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa'
import SEO from '../components/SEO';

// SwiperJS imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialGallery = () => {

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe, Newtown Wellington",
      text: "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit...”",
    },
    {
      name: "Jane Smith, Porirua",
      text: "“Donec quam felis, ultricies nec, pellentesque eu, pretium quis...”",
    },
    {
      name: "Sam Lee, Lower Hutt",
      text: "“Cum sociis natoque penatibus et magnis dis parturient montes...”",
    },
    {
      name: "Olivia Brown, Petone",
      text: "“Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet.”",
    },
    {
      name: "Michael Green, Upper Hutt",
      text: "“Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.”",
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
    "/project-images/central-heating1.JPG",
    "/project-images/spouting1.JPG",
    "/project-images/infinity2.jpg",
    "/project-images/underfloor-heating3.JPG",
    "/project-images/spouting3.JPG",
    "/project-images/central-heating7.JPG",
      "/project-images/infinity5.jpg",
    "/project-images/underfloor-heating2.JPG"
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
    </>
    );
}

export default TestimonialGallery
