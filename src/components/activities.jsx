import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import time from "../assets/time.svg";
import location from "../assets/location.svg";

function Activities() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState("Upcoming"); // Default filter

  useEffect(() => {
    fetch("https://backend-newton-product-non-admin-1.onrender.com/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.data || []);
        setFilteredEvents(filterEvents(data.data || [], "Upcoming"));
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleRedirect = (id) => {
    navigate(`/events/${id}`);
  };

  // Utility function to filter events
  const filterEvents = (events, category) => {
    const currentDate = new Date();

    return events.filter((event) => {
      const eventDate = new Date(event.day); // Assuming `event.date` is in a valid ISO format

      switch (category) {
        case "Upcoming":
          return eventDate > currentDate;
        case "Ongoing":
          const eventEndDate = new Date(event.endDate); // Assuming events have `endDate`
          return eventDate <= currentDate && currentDate <= eventEndDate;
        case "Past":
          return eventDate < currentDate;
        default:
          return true;
      }
    });
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    setFilteredEvents(filterEvents(events, category));
  };

  

  return (
    <div>
      <div id="events" className="flex flex-col items-center justify-center mb-[2vw]">
        <div className="text-white text-center text-5xl mt-[2vw] mb-[2vw] heading">Activities</div>

        <div className="h-[5vh] w-[80%] flex items-center justify-center mb-[8px]">
          <div className="h-[2.2vw] w-[40%] flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px] border border-white/20 pt-[2px] pb-[2px]">
            {["Upcoming", "Ongoing", "Past"].map((category) => (
              <div
                key={category}
                className={`w-[30%] h-[80%] flex items-center justify-center text-xl ${
                  filter === category ? "bg-white text-black" : "text-white"
                } hover:bg-white hover:text-black cursor-pointer rounded-xl font-black`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl h-[50vh] w-[80%] pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
          {filteredEvents.length > 0 ? (
            <div className="grid place-items-center gap-10 overflow-y-scroll h-[95%] scrollbar-hide pt-[5px]">
              {filteredEvents.map((event) => {
                const [day, month] = event.day.split(" ");

                const [_, monthNumber, monthDate] = event.day.split("-"); 
                            
                const monthNames = [
                "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"
                ];

                const monthName = monthNames[parseInt(monthNumber, 10) - 1];
                return (
                  <div
                    key={event._id}
                    className="h-[6vw] w-[95%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-xl shadow-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => handleRedirect(event._id)}
                    style={{ boxShadow: "2px 3px 5px rgba(0,0,0,.5)"}}
                  >
                    <div className="date text-center w-[15%] h-[60px] pl-[10px] font-extrabold">
                      <span className="text-5xl">{monthDate}</span>
                      <br />
                      <span className="text-3xl">{monthName}</span>
                    </div>
                    <div className="add w-[20%] pl-[15px] pr-[5px]">
                      <div className="time text-sm flex items-center mb-3">
                        <img src={time} alt="time" className="h-5 w-5 pr-[4px]" />
                        {event.time}
                      </div>
                      <div className="location text-sm flex items-center">
                        <img src={location} alt="location" className="h-5 w-5 pr-[4px]" />
                        {event.address}
                      </div>
                    </div>
                    <div className="desc w-[50%] pl-[10px] border-r pr-[10px]">
                      <div className="event_name text-2xl font-black">{event.name}</div>
                      <div className="event_desc text-[0.875rem] text-[#bdb3b3]">{event.description}</div>
                    </div>
                    <div className="type text-center -rotate-90 text-3xl w-[12%] heading pt-[10px]">{event.type}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="text-white">No events found</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Activities;
