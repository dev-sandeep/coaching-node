import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export const Slider = () => {
  // array of images to be displayed in the slider
  const images = [
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1513420901937-0b9c3ddb6b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={image} className="" alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
