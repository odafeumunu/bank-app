// HomePage.jsx
import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./HomePage.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img1.jpg";
import img3 from "../../assets/img1.jpg";

export const HomePage = () => {
  const slides = [
    {
      img: img1,
      text: "Save money while at it",
    },
    {
      img: img2,
      text: "Track your expenses easily",
    },
    {
      img: img3,
      text: "Stay financially healthy",
    },
  ];

  return (
    <div className="homepage" style={{maxWidth: "500px", margin: "auto"}}>
      <div className="slider-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <img src={slide.img} alt={`slide-${index}`} />
                <div className="txt">
                  <p>{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="log-reg">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/signup" className="btn signup">
          Create an account
        </Link>
      </div>
    </div>
  );
};
