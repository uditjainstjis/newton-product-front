import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../events_ carousal/events_carousal.css'
import Details from './slider_detail';




import { EffectCoverflow, Navigation } from 'swiper/modules';

function EventSlider() {
  return (
    <>
      <Swiper
       
        effect={'coverflow'}

        simulateTouch={true}
        initialSlide={2}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView= {3}
        loop={true}
        loopFillGroupWithBlank={true}
        loopedSlides={3}
        autoplay={true}
        spaceBetween={20}
        coverflowEffect={{
          rotate: -30,
          stretch: -50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale:0.7

        }}

        navigation={true}
        pagination={true}
        

        modules={[EffectCoverflow, Navigation]}

        className="mySwiper"
      >
        <SwiperSlide className="bg-white ml-[8px] h-[15vh] ">
          
            <Details/>
        </SwiperSlide >
        <SwiperSlide className="bg-white ml-[8px] h-[15vh]">
            <Details/>
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[8px] h-[15vh]">
            <Details/>
        </SwiperSlide>
        <SwiperSlide className="bg-white ml-[8px] h-[15vh]">
            <Details/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default EventSlider