import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './events_carousal.css';
import logo from '../../assets/images/slider.jpeg'; // This logo image
import image from "../../assets/images/image copy.png"
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function EventSlider() {

  const data = [
    { id: 1, image: logo, date: "2024-12-01" },
    { id: 2, image: logo, date: "2024-12-02" },
    { id: 3, image: logo, date: "2024-12-03" },
    { id: 4, image: logo, date: "2024-12-04" },
  ];

  const Re = useNavigate();

  const handleRe = (id) => {
      Re(`/events/register/${id}`)
  }

  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/events/${id}`); // Navigate to event-specific route
  };

  return (
    <>
   
      <Swiper
        effect={'coverflow'}
        simulateTouch={true}
        initialSlide={2}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
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
          scale: 0.7
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {data.map((event) => (
          <>
          
          <SwiperSlide key={event.id} className="bg-white ml-[8px] h-[15vh]">
          
            <div className='items-center justify-center m-[10px] w-[10vh] h-[10vh]'>
              <img src={image} alt="Event logo"/> 
            </div>
            <div className=' backdrop-blur-[0px] bg-transparent rounded-2xl pt-[2px] pb-[2px] pl-[20px] pr-[20px] text-white relative w-[60%] text-center'>
              {event.date}  
            </div>
            <div className='text-white flex justify-evenly w-[120px] m-[8px] h-[10%] relative'>
              <button className='bg-white text-black pt-[2px] pb-[2px] pl-[5px] pr-[5px] rounded-xl border-0 ' style={{borderRadius:"5px",fontSize:"0.7rem"}} onClick={() => handleRe(event.id)}>
                Register Now
              </button>
              <button 
                className='bg-white/15 backdrop-blur-[15px] rounded-2xl pt-[2px] pb-[2px] pl-[5px] pr-[5px]' 
                onClick={() => handleRedirect(event.id)} 
                style={{borderRadius:"5px",fontSize:"0.7rem"}}
              >
                Learn More
              </button>
            </div>
          </SwiperSlide>

          
          </>
        ))}
      </Swiper>

    </>
  );
}

export default EventSlider;
