import React, { useState, useEffect } from "react";
import logo from '../assets/skill.png'
import { useParams, useNavigate } from 'react-router-dom';
function Events() {
  const { id } = useParams(); // Get event ID from the URL
  const [data, setData] = useState({})
  


  useEffect(() => {
    fetch("https://backend-newton-product-non-admin-1.onrender.com/api/events")
      .then((response) => response.json())
      .then((data) => {
        const result = data.data.find((item) => {
          return (item._id === id)
        })
        setData(result || [])
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, [])
const navigate = useNavigate()

    

    
    // const [year, monthNumber, monthDate] = data.day.split("-"); 
    
    // const monthNames = [
    // "January", "February", "March", "April", "May", "June", 
    // "July", "August", "September", "October", "November", "December"
    // ];

    // const monthName = monthNames[parseInt(monthNumber, 10) - 1];


  return (
    <div className='flex flex-col items-center justify-center ml-[6vw] w-[50vw]' style={{margin: "0 auto"}}>
      <div className='h-[45vh] w-[75%]  m-[20px] bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-[10px] border border-[#696969] rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center justify-center flex-col'>
        <img src={data.image} alt='' className='h-[60%]'/>
        <div className=' flex justify-center items-center text-white relative w-[25%] h-[6%] text-center mt-[20px] mb-[20px] font-black text-2xl'>
        {data?.day ? (() => {
        const [year, monthNumber, day] = data.day.split("-");
        const monthNames = [
          "January", "February", "March", "April", "May", "June", 
          "July", "August", "September", "October", "November", "December"
            ];
          const monthName = monthNames[parseInt(monthNumber, 10) - 1];
          return `${day} ${monthName}, ${year}`;
            })() : "Loading..."}
      </div>
        <button onClick={()=>{
          navigate(`/events/register/${id}`)
        }} className='bg-white text-black pt-[2px] pb-[2px] pl-[20px] pr-[20px] rounded-2xl border-0'>Register Now</button>
      </div>
      <div className='text-white text-justify m-[20px]'>
        <div className='text-center text-4xl m-[20px]'>About event</div>
        <div className='mt-[20px] mb-[20px] ml-[30px] mr-[30px]'>
        {data.body}
        </div>
      </div>
      <button onClick={()=>{
          navigate(`/events/register/${id}`)
        }} className='bg-white text-black pt-[2px] pb-[2px] pl-[20px] pr-[20px] rounded-full border-0 w-[20%] h-[1.75vw]'>Register Now</button>
    </div>
  )
}
export default Events









