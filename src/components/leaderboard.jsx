import time from "../assets/time.svg"
import location from "../assets/location.svg"
import { useState,useEffect } from "react";
function Leaderboard() {
      const [events, setEvents] = useState([]); 
  useEffect(() => {
    fetch("https://backend-newton-product-non-admin-1.onrender.com/api/events")
      .then((response) => response.json())
      .then((data) => {
        
        setEvents(data.data);
        console.log(data.data);
        
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);
    return(
        <div className="flex flex-col items-center justify-center mb-[2vw] section-gap">
            <div className="text-white text-center text-5xl mt-[2vw] mb-[2vw] heading">Leaderboard</div>
            <div className="h-[5vh] w-[80%] flex items-center justify-center mb-[8px]">
            <div className="h-[2.2vw] w-[70%]  flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px] pl-[10px] pr-[10px] pt-[2px] pb-[2px] border border-white/20">
            <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl transition-all duration-150 hover:bg-white hover:text-black rounded-xl bg-white text-black">All</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center text-xl text-white transition-all duration-150 hover:bg-white hover:text-black cursor-pointer rounded-xl">Chola</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Maratha</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Rajputana</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Vijaya</div>
                       
                    </div>
                    {/* <div className="ml-auto">
                        <select className=" text-xl w-[80px] h-[30px] text-center bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                            <option>Week</option>
                            <option>This week</option>
                            <option value="">Last week</option>
                        </select>
                    </div> */}
                </div>
            <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl h-[50vh] w-[80%] pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
                <div className="grid place-items-center gap-12 overflow-y-scroll h-[100%] scrollbar-hide pt-[5px]">
                    {events.map((event, index) => {

                          const [_, monthNumber, monthDate] = event.day.split("-"); 
                                                      
                          const monthNames = [
                          "January", "February", "March", "April", "May", "June", 
                          "July", "August", "September", "October", "November", "December"
                          ];

                          const monthName = monthNames[parseInt(monthNumber, 10) - 1];
              
                        return(


                         <div className="h-[6vw] w-[95%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-xl shadow-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer " style={{ boxShadow: "2px 3px 5px rgba(0,0,0,.5)"}}>
                         <div className="date text-center w-[15%] h-[60px] pl-[10px] font-extrabold">
                          <span className="text-5xl">{monthDate}</span>
                            <br />
                          <span className="text-3xl">{monthName}</span>
                      </div>
                         <div className="add w-[20%] pl-[35px] pr-[5px]">
                                    <div className="time text-xl flex items-center mb-3">
                                    <img src={time} alt='time' className='h-5 w-5 pr-[4px]' />
                                    {event.time}
                                    </div>
                                    <div className="location text-l flex items-center">
                                    <img src={location} alt='location' className='h-5 w-5 pr-[4px]' />
                                    {event.address}
                                    </div>
                                </div>
                         <div className="desc w-[50%] pl-[10px] pr-[10px]">
                             <div className="event_name text-2xl font-black" style={{ fontWeight: '900' }}>{event.name}</div>
                             <div className="event_desc text-[#BDB3B3] text-[0.875rem]">{event.description}</div>
                         </div>
                         {/* <div className="type text-center -rotate-90 text-3xl w-[12%] heading pt-[10px]">{events.position}</div> */}
                     </div>
                    )})
                  }
                </div>
            </div>
        </div>
    )
}
export default Leaderboard;