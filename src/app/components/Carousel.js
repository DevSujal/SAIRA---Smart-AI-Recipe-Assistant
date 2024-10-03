"use client"; // Required for Next.js 13 and later

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct imports
import { Navigation, Pagination, A11y } from "swiper"; // Required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles

// Sample image URLs for demonstration
const images = [
  "https://via.placeholder.com/400x400?text=Image+1",
  "https://via.placeholder.com/400x400?text=Image+2",
  "https://via.placeholder.com/400x400?text=Image+3",
  "https://via.placeholder.com/400x400?text=Image+4",
  "https://via.placeholder.com/400x400?text=Image+5",
  "https://via.placeholder.com/400x400?text=Image+6",
];

const Carousel = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, A11y]} // Ensure modules are correctly included
        spaceBetween={20}
        slidesPerView={4} // Display 4 images at once
        loop={true}
        pagination={{ clickable: true }}
        navigation
        grabCursor={true}
        className="relative"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-xl transition-transform duration-300">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Image {index + 1}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff; /* Change navigation button color */
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
        }
        .swiper-pagination-bullet {
          background: #77c35b; /* Change pagination bullet color */
        }
        .swiper-pagination-bullet-active {
          background: #ffffff; /* Active bullet color */
        }
      `}</style>
    </div>
  );
};

export default Carousel;
