import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../events_ carousal/events_carousal.css'
import myimg from '../../assets/Group 6.png'
import ru from '../../assets/RULogo.svg'


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
          stretch: -50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale:0.7
          
        }}
        
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow,Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide >
          <div className='imgcont' >
             <img src={myimg} alt='container' />
             {/* <img src={ru} alt='logo' className='logo_top'/> */}
             <div className="carousal-top h-[15vh] w-[20vw] bg-white ml-[8px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className='imgcont' >
             <img src={myimg} alt='container' />
             <div className="carousal-top h-[15vh] w-[20vw] bg-white ml-[8px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className='imgcont' >
             <img src={myimg} alt='container' />
             <div className="carousal-top h-[15vh] w-[20vw] bg-white ml-[8px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className='imgcont' >
             <img src={myimg} alt='container' />
             <div className="carousal-top h-[15vh] w-[20vw] bg-white ml-[8px]"></div>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
    </>
  );


}


export default EventSlider