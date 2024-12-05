import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './events_carousal.css';
import logo from '../../assets/images/slider.jpeg';
import image from "../../assets/images/image copy.png";
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

  const handleRedirect = useCallback((id) => {
    navigate(`/events/${id}`);
  }, [navigate]);

  const handleRe = useCallback((id) => {
    navigate(`/events/register/${id}`);
  }, [navigate]);

 
  return (
    <Swiper
      effect='coverflow'
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
        scale: 0.7,
      }}
      navigation={true}
      pagination={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper"
    >
      {data.map((event) => (
        <SwiperSlide style={{ boxShadow: "2px 3px 10px rgba(0,0,0,.5)"}} key={event.id} className="bg-white ml-[8px] h-[15vh]">
          <div className='items-center justify-center m-[10px] w-[10vh] h-[10vh]'>
            <img src={image} alt="Event logo" />
          </div>
          <div className='event-info'>
            {event.date}
          </div>
          <div className='button-container'>
            <button
              className='register-button'
              onClick={() => handleRe(event.id)}
            >
              Register Now
            </button>
            <button
              className='learn-more-button'
              onClick={() => handleRedirect(event.id)}
            >
              Learn More
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default EventSlider;
