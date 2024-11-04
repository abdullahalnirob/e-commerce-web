import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1  from '../../assets/Slider_image/slide-1.jpg'
import img2  from '../../assets/Slider_image/slide-2.jpg'
import img3  from '../../assets/Slider_image/slide-3.jpg'
import img4  from '../../assets/Slider_image/slide-4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './style.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

export default function SLider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{delay:2000}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper z-10 relative"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
