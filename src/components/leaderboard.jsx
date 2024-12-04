

function Leaderboard() {
    
    const events = [
        {
          date: "27 December",
          time: "9:00AM to 9:00PM",
          location: "A403, Rishihood University",
          title: "TITLE",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
          position: "1st",
        },
        {
            date: "27 December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            position: "2nd",
          },
          {
            date: "27 December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            position: "2nd",
          },
          {
            date: "27 December",
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
            <div className="h-[2.2vw] w-[70%]  flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px] pl-[10px] pr-[10px]">
                        <div className="w-[30%] h-[80%] flex items-center justify-center text-2xl text-white transition-all duration-150 hover:bg-white hover:text-black cursor-pointer rounded-xl">Chola</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-2xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Maratha</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-2xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Rajputana</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-2xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Vijaya</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-2xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">All</div>
                    </div>
                    <div className="ml-auto">
                        <select className=" text-xl w-[80px] h-[30px] text-center bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                            <option>Week</option>
                            <option>This week</option>
                            <option value="">Last week</option>
                        </select>
                    </div>
                </div>
            <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl h-[55vh] w-[80%] p-[12px]">
                <div className="grid place-items-center gap-12 overflow-y-scroll h-[100%] scrollbar-hide pt-[5px]">
                   
                    {events.map((event, index) => (
                         <div className="h-[5vw] w-[95%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-105">
                         <div className="date text-3xl text-center w-[15%] h-[60px] pl-[10px] pr-[5px] flex items-center justify-center">{event.date}</div>
                         
                         <div className="add text-center w-[20%] pl-[5px] pr-[5px]">
                             <div className="time text-s">{event.time}</div>
                             <div className="location text-s">{event.location}</div>
                         </div>
                         <div className="desc w-[61%] pl-[5px]">
                             <div className="event_name text-2xl">{event.title}</div>
                             <div className="event_desc">{event.description}</div>
                         </div>
                         <div className="position text-center -rotate-90 text-4xl">{event.position}</div>
                     </div> 
                    ))}
                   
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;