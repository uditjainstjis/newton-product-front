import { useNavigate } from 'react-router-dom';

function Activities() {
    const events = [
        {
            date: "27 December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            type: "CLUB",
            id: "1"
        },
        {
            date: "27 December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            type: "CLUB",
            id: "2"
        },
        {
            date: "27 December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            type: "CLUB",
            id: "3"
        },
        {
            date: "27 December",
            time: "9:00AM to 9:00PM",
            location: "A403, Rishihood University",
            title: "TITLE",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus magni ipsa reprehenderit pariatur aliquid quas deserunt.",
            type: "CLUB",
            id: "4"
        },
    ];

    const navigate = useNavigate();

    const handleRedirect = (id) => {
        navigate(`/events/${id}`); // Navigate to event-specific route
    };

    return (
        <div id="events" className="flex flex-col items-center justify-center mb-[2vw] ">

            <div className="text-white text-center text-4xl mt-[2vw] mb-[2vw] heading">Activities</div>
            <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl h-[50vh] w-[80%] ">
                <div className="flex h-[4vw] mt-[1vw] ml-[1vw] mb-[0.5vw] ">
                    <div className="h-[2.2vw] w-[40%]  flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px]">
                        <div className="w-[30%] h-[80%] flex items-center justify-center text-2xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl">Upcoming</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center text-2xl text-white hover:bg-white hover:text-black rounded-xl">Ongoing</div>
                        <div className="w-[30%] h-[80%] flex items-center justify-center text-2xl text-white hover:bg-white hover:text-black rounded-xl">Past</div>
                    </div>
                    <select className=" ml-auto text-2xl w-[80px] h-[30px] text-center mr-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                        <option>Week</option>
                    </select>
                </div>
                <div className="grid place-items-center gap-12 overflow-y-scroll h-[36vh] scrollbar-hide pt-[5px]">

                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="h-[5vw] w-[90%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-xl border border-white/20 shadow-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                            onClick={() => handleRedirect(event.id)} // Pass event ID
                        >
                            <div className="date text-3xl text-center w-[15%] h-[60px] pl-[10px]">{event.date}</div>
                            <div className="add text-center w-[20%] pl-[5px] pr-[5px]">
                                <div className="time text-s">{event.time}</div>
                                <div className="location text-s">{event.location}</div>
                            </div>
                            <div className="desc w-[61%] pl-[10px]">
                                <div className="event_name text-2xl">{event.title}</div>
                                <div className="event_desc">{event.description}</div>
                            </div>
                            <div className="type text-center -rotate-90 text-4xl">{event.type}</div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Activities;