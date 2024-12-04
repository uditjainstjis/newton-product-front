import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Activities() {

    const navigate = useNavigate();

    const [Events, setEvents] = useState(null);

    useEffect(() => {
        fetch("https://backend-newton-product-non-admin-1.onrender.com/api/events")
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                
                setEvents(data.data); 
            })
            .catch(error => {
                console.error("Error fetching events:", error);
            });
    }, []);
    


    const handleRedirect = (id) => {
        navigate(`/events/${id}`);
    };

    return (

        <div>
            <div id="events" className="flex flex-col items-center justify-center mb-[2vw] ">

                <div className="text-white text-center text-4xl mt-[2vw] mb-[2vw] heading">Activities</div>
                <div className="h-[2.2vw] w-[40%]  flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px]">
                            <div className="w-[30%] h-[80%] flex items-center justify-center text-2xl text-white transition-all duration-150 hover:bg-white hover:text-black cursor-pointer rounded-xl">Upcoming</div>
                            <div className="w-[30%] h-[80%] flex items-center justify-center text-2xl text-white hover:bg-white hover:text-black cursor-pointer rounded-xl">Ongoing</div>
                            <div className="w-[30%] h-[80%] flex items-center justify-center text-2xl text-white hover:bg-white hover:text-black cursor-pointer rounded-xl">Past</div>
                        </div>
                <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl h-[50vh] w-[80%] ">
                    <div className="flex h-[4vw] mt-[1vw] ml-[1vw] mb-[0.5vw] ">
                        <select className=" ml-auto text-xl w-[80px] h-[30px] text-center mr-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                            <option>Week</option>
                            <option>This week</option>
                            <option value="">Last week</option>
                        </select>
                        

                    </div>
                    {Event ? (<><div className="grid place-items-center gap-12 overflow-y-scroll h-[36vh] scrollbar-hide pt-[5px]">

                        {Events&& Events[0]&&Events.map((event) => (
                            <div
                                key={event._id}
                                className="h-[5vw] w-[90%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-xl border border-white/20 shadow-xl text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                                onClick={() => handleRedirect(event._id)} 
                            >
                                <div className="date text-3xl text-center w-[15%] h-[60px] pl-[10px]">{event.day}</div>
                                <div className="add text-center w-[20%] pl-[5px] pr-[5px]">
                                    <div className="time text-s">{event.time}</div>
                                    <div className="location text-s">{event.address}</div>
                                </div>
                                <div className="desc w-[61%] pl-[10px]">
                                    <div className="event_name text-2xl">{event.name}</div>
                                    <div className="event_desc">{event.description}</div>
                                </div>
                                <div className="type text-center -rotate-90 text-4xl">{event.type}</div>
                            </div>
                        ))}


                    </div></>) : (<><h3 className='text-white'>No events found</h3></>)}

                </div>
            </div>
        </div>
    )
}

    export default Activities;