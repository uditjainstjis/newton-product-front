import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../events_ carousal/events_carousal.css'
import myimg from '../../assets/Group 6.png'


// import required modules
import { EffectCoverflow,Navigation } from 'swiper/modules';

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
        spaceBetween={20}
        coverflowEffect={{
          rotate: -30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale:0.6
          
        }}
        
        navigation={true}
        modules={[EffectCoverflow,Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide >
          <div className='imgcont' >
             <img src={myimg} alt='container' />
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className='imgcont' >
             <img src={myimg} alt='container' />
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className='imgcont' >
             <img src={myimg} alt='container' />
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className='imgcont' >
             <img src={myimg} alt='container' />
          </div>
        </SwiperSlide>
       
        
      </Swiper>
    </>
  );
}


export default EventSlider