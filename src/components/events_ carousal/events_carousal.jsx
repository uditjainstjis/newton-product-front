import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './events_carousal.css';
import logo from '../../assets/skill.png'; // This logo image
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function EventSlider() {

  const data = [
    { id: 1, image: logo, date: "2024-12-01" },
    { id: 2, image: logo, date: "2024-12-02" },
    { id: 3, image: logo, date: "2024-12-03" },
    { id: 4, image: logo, date: "2024-12-04" },
  ];

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
          <SwiperSlide key={event.id} className="bg-white ml-[8px] h-[15vh]">
            <div className='w-[25%] items-center justify-center m-[20px]'>
              <img src={event.image} alt="Event logo" />  {/* Correct image */}
            </div>
            <div className='bg-white/15 backdrop-blur-[15px] rounded-2xl pt-[2px] pb-[2px] pl-[20px] pr-[20px] text-white relative w-[60%] text-center'>
              {event.date}  {/* Correct date */}
            </div>
            <div className='text-white flex justify-evenly w-[80%] m-[8px] h-[10%] relative'>
              <button className='bg-white text-black pt-[2px] pb-[2px] pl-[20px] pr-[20px] rounded-2xl border-0'>
                Register Now
              </button>
              <button 
                className='bg-white/15 backdrop-blur-[15px] rounded-2xl pt-[2px] pb-[2px] pl-[20px] pr-[20px]' 
                onClick={() => handleRedirect(event.id)} // Correct id for Learn More
              >
                Learn More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default EventSlider;
