import React, { useCallback, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './events_carousal.css';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
function EventSlider() {
  // Initial dummy data
  const dummyData = [
    { id: 1, image: 'https://static.vecteezy.com/system/resources/thumbnails/003/145/585/small/hackathon-and-codefest-set-of-doodle-style-icons-vector.jpg0', day: "2024-12-10", _id: '1' },
    { id: 2, image: 'https://static.vecteezy.com/system/resources/thumbnails/003/145/585/small/hackathon-and-codefest-set-of-doodle-style-icons-vector.jpg', day: "2024-12-20", _id: '2' },
    { id: 3, image: 'https://static.vecteezy.com/system/resources/thumbnails/003/145/585/small/hackathon-and-codefest-set-of-doodle-style-icons-vector.jpg', day: "2024-12-30", _id: '3' },
    { id: 4, image: 'https://static.vecteezy.com/system/resources/thumbnails/003/145/585/small/hackathon-and-codefest-set-of-doodle-style-icons-vector.jpg', day: "2024-12-04", _id: '4' },
  ];
  const navigate = useNavigate();
  const handleRedirect = useCallback((id) => {
    navigate(`/events/${id}`);
  }, [navigate]);
  const handleRe = useCallback((id) => {
    navigate(`/events/register/${id}`);
  }, [navigate]);
  const [events, setEvents] = useState(dummyData); // Initially set the dummy data
  useEffect(() => {
    fetch("https://backend-newton-product-non-admin-1.onrender.com/api/events")
      .then((response) => response.json())
      .then((data) => {
        // Filter events where ActivatedForCarousel is true
        const filteredEvents = data.data.filter(event => event.ActivatedForCarousel === true);
        setEvents(filteredEvents); // Replace dummy data with fetched data
        console.log(filteredEvents); // Log the filtered events
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);
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
      loopedSlides={4}
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
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper"
    >
      {events.map((event) => (
        <SwiperSlide style={{ boxShadow: "2px 3px 10px rgba(0,0,0,.5)"}} key={event._id} className="bg-white ml-[8px] h-[15vh]">
          <div className='items-center justify-center m-[10px] w-[10vh] h-[10vh]'>
            <img src={event.image} alt="Event logo" />
          </div>
          <div className='event-info'>
            {event.day}
          </div>
          <div className='button-container'>
            <button
              className='register-button'
              onClick={() => handleRe(event._id)}
            >
              Register Now
            </button>
            <button
              className='learn-more-button'
              onClick={() => handleRedirect(event._id)}
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