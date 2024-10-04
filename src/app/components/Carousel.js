"use client"; // Required for Next.js 13 and later

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample image URLs for demonstration
const images = [
  { tittle: "Savor your creations", src: "https://hips.hearstapps.com/hmg-prod/images/copycat-chipotle-burrito-bowl-secondary-641dd68c6847f.jpg" },
  { tittle: "Build a healthy lifestyle", src: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/man-eating.jpg?quality=82&strip=1" },
  { tittle: "Cherish the process", src: "https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=612x612&w=0&k=20&c=f7BnJRCqLKaj_DEQB1SB71_eRT8y1XRP52dDyYRSxuE=" },
  { tittle: "Explore new cuisines", src: "https://static.toiimg.com/photo/79442202.cms" },
  { tittle: "Simplify your cooking", src: "https://www.southernliving.com/thmb/sLBVbaEJf4ZERTAfrwPcvUN-blI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ravioli_Lasagna_010-c251db1faa1d4e0d8e2708396dc41525.jpg" },
  { tittle: "Invent fresh recipes", src: "https://thumbs.dreamstime.com/b/lot-food-wooden-table-georgian-cuisine-top-view-flat-lay-khinkali-georgian-dishes-96049794.jpg" }
];

const Carousel = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto py-10 px-5">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]} // Include Autoplay
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        grabCursor={true}
        autoplay={{ delay: 2300, disableOnInteraction: false }} // Autoplay configuration
        className="relative"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="carousel-slide animate-fade-in">
              <img
                src={item.src}
                alt={`Image ${index + 1}`}
                className="carousel-image"
              />
              <div className="carousel-text-container animate-slide-up">
                <p className="carousel-text">{item.tittle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for the Swiper component */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-in-out 0.3s;
          animation-fill-mode: both;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
        }

        .swiper-pagination-bullet {
          background: #6bbf59; /* Custom bullet color */
        }

        .swiper-pagination-bullet-active {
          background: #fff; /* Active bullet color */
        }

        .carousel-slide {
          position: relative;
          width: 100%;
          height: 16rem;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .carousel-slide:hover .carousel-image {
          transform: scale(1.08);
        }

        .carousel-text-container {
          position: absolute;
          bottom: 20px;
          left: 10%;
          transform: translateX(-50%);
          background: none; 
          padding: 0.5rem 1rem; 
          border-radius: 0.5rem; 
          box-shadow: none; 
          opacity: 0; 
          transition: opacity 0.5s ease;
        }

        .carousel-text {
          color: #fff; 
          font-size: 1.5rem; 
          font-weight: 700; 
          text-align: center; 
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Enhanced shadow for better readability */
        }



        .carousel-slide:hover .carousel-text-container {
          animation: slideUp 0.5s forwards ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
