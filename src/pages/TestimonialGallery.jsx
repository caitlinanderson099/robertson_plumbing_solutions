import React, { useState } from "react";
import PageHeader from '../components/PageHeader'
import { FaStar } from 'react-icons/fa'
import SEO from '../components/SEO';

// SwiperJS imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialGallery = () => {

// Testimonials Section
    const TestimonialSection = () => {
            return (
            <div className="testimonial-section">
                <div className="section-header">
                <h2>Testimonials</h2>
                <hr />
                </div>
                <div className="review-cont">
                <div className="review-item">
                    <h3>John Doe, Newtown Wellington</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit..."</p>
                    <div className="star-rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                </div>
        
                <div className="review-item">
                    <h3>Jane Smith, Porirua</h3>
                    <p>"Donec quam felis, ultricies nec, pellentesque eu, pretium quis..."</p>
                    <div className="star-rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                </div>
        
                <div className="review-item">
                    <h3>Sam Lee, Lower Hutt</h3>
                    <p>"Cum sociis natoque penatibus et magnis dis parturient montes..."</p>
                    <div className="star-rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                </div>
                </div>
            </div>
            )
    };


const GallerySection = () => {
  const images = [
    "/project-images/bathroom-reno.webp",
    "/project-images/drainlaying-img.webp",
    "/project-images/bathroom-reno2.webp",
    "/project-images/bathroom-reno.webp",
    "/project-images/drainlaying-img.webp",
    "/project-images/bathroom-reno2.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-section">
      <div className="section-header">
        <h2>Gallery</h2>
        <hr />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 }, // 2 on tablets
          1024: { slidesPerView: 3 }, // 3 on desktops
        }}
        className="gallery-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
              onClick={() => setSelectedImage(src)} // open modal
              style={{ cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage} alt="Full View" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

     // Image Scroll Section #2
  const ImageScroll2 = () => <div className="image-scroll2"></div>

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
        <PageHeader
        title="Testimonials & Gallery"
        backgroundImage="/bg-images/testimonial-bg.webp"
        />
        <TestimonialSection/>
        {/* <ImageScroll2/> */}
        <GallerySection/>
        
    </div>
    </>
    );
}

export default TestimonialGallery
