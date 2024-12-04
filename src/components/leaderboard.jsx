import time from "../assets/time.svg"
import location from "../assets/location.svg"

function Leaderboard() {
    
    const events = [
        {
          date: "27",
          month:"December",
          time: "9:00AM to 9:00PM",
          location: "A403, Rishihood University",
          title: "TITLE",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
          position: "1st",
        },
        {
            date: "27",
          month:"December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            position: "2nd",
          },
          {
            date: "27",
          month:"December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            position: "2nd",
          },
          {
            date: "27",
          month:"December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            position: "3rd",
          },
      ];

      


    return(
        <div className="flex flex-col items-center justify-center mb-[2vw] ">
            
            <div className="text-white text-center text-4xl mt-[2vw] mb-[2vw] heading">Leaderboard</div>
            <div className="h-[5vh] w-[80%] flex items-center justify-center mb-[8px]">
            <div className="h-[2.2vw] w-[70%]  flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px] pl-[10px] pr-[10px] pt-[2px] pb-[2px]">
                        <div className="w-[30%] h-[80%] flex items-center justify-center text-xl text-white transition-all duration-150 hover:bg-white hover:text-black cursor-pointer rounded-xl">Chola</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Maratha</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Rajputana</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Vijaya</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">All</div>
                    </div>
                    <div className="ml-auto">
                        <select className=" text-xl w-[80px] h-[30px] text-center bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                            <option>Week</option>
                            <option>This week</option>
                            <option value="">Last week</option>
                        </select>
                    </div>
                </div>
            <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl h-[50vh] w-[80%] pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
                <div className="grid place-items-center gap-12 overflow-y-scroll h-[100%] scrollbar-hide pt-[5px]">
                   
                    {events.map((event, index) => (
                         <div className="h-[6vw] w-[95%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-xl shadow-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-105">
                         <div className="date text-center w-[15%] h-[60px] pl-[10px] font-extrabold">
                            <span className="text-5xl mb-10">{event.date}</span><br/><span className="text-3xl">{event.month}</span></div>
                         
                         <div className="add w-[20%] pl-[15px] pr-[5px]">
                                    <div className="time text-sm flex items-center mb-3">
                                    <img src={time} alt='time' className='h-5 w-5 pr-[4px]' />
                                    {event.time}
                                    </div>
                                    <div className="location text-sm flex items-center">
                                    <img src={location} alt='location' className='h-5 w-5 pr-[4px]' />
                                    {event.location}
                                    </div>
                                </div>
                         <div className="desc w-[50%] pl-[10px] border-r pr-[10px]">
                             <div className="event_name text-2xl font-black" style={{ fontWeight: '900' }}>{event.title}</div>
                             <div className="event_desc text-[#bdb3b3] text-[0.875rem]">{event.description}</div>
                         </div>
                         <div className="type text-center -rotate-90 text-3xl w-[12%] heading pt-[10px]">{event.position}</div>
                     </div> 
                    ))}
                   
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;