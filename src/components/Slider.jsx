import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

import { testimonials } from '../data';

export default function Slider() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className='mySwiper'
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {testimonials.map((item, index) => {
        const { authorImg } = item;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center'>
              <img src={authorImg} alt='' />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
