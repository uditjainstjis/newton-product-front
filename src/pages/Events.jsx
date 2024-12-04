import React from 'react'
import logo from '../assets/skill.png' 
import { useParams } from 'react-router-dom';

function Events() {
  const { id } = useParams(); // Get event ID from the URL

  return (
    <div className='flex flex-col items-center justify-center ml-[6vw] w-[50vw] '>
      <div className='h-[45vh] w-[75%]  m-[20px] bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-[10px] border border-[#696969] rounded-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center justify-center flex-col'>
        
        <img src={logo} alt='' className='h-[60%]'/>
        <div className='bg-white/15 backdrop-blur-[15px] rounded-2xl flex justify-center items-center text-white relative w-[25%] h-[6%] text-center mt-[20px] mb-[20px]'>29th Feburary, 2050</div>
        <button className='bg-white text-black pt-[2px] pb-[2px] pl-[20px] pr-[20px] rounded-2xl border-0'>Register Now</button>
      </div>
      <h1 className='text-white'>Event ID: {id}</h1>
      <div className='text-white text-justify m-[20px]'>
        <div className='text-center text-4xl m-[20px]'>About event</div>
        <div className='mt-[20px] mb-[20px] ml-[30px] mr-[30px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus veniam ad non, error sit minus explicabo fugit exercitationem asperiores harum tempore, nostrum ullam corrupti enim ab porro quae? Molestiae at qui reiciendis cum porro a, sunt ab ut placeat deleniti aliquam id dignissimos? Alias error inventore soluta dolorem rerum sed incidunt similique, aliquid amet atque laboriosam veritatis sit debitis eum vero maxime sint ut cumque consequatur, ipsum consectetur magni porro perspiciatis. Saepe, ex perspiciatis dolor doloribus iusto vel eaque ea quam veritatis, beatae cupiditate corrupti nulla voluptatibus temporibus doloremque sequi aliquam! Ea, aliquam. Repellendus, doloremque. Maiores nemo asperiores atque dolor voluptatibus officiis beatae ratione sapiente enim obcaecati aperiam, tempore aliquam impedit repellendus corrupti? Nostrum facilis suscipit enim amet possimus animi sequi, error temporibus esse nisi excepturi totam sed. Maxime vero, aperiam iste vitae dolor illum fugit, nesciunt, consequatur ad explicabo consequuntur et? Dicta suscipit, dolor necessitatibus magni iste quos maxime, nisi amet odio ad quis quae rerum tempora ipsa nostrum neque iure sit sed perferendis harum aliquid velit. Eveniet deserunt, vero numquam ipsa explicabo rem unde excepturi labore aliquam alias sunt ipsam, nisi assumenda? 
        </div>
        
      </div>
      <button className='bg-white text-black pt-[2px] pb-[2px] pl-[20px] pr-[20px] rounded-full border-0 w-[20%] h-[1.75vw]'>Register Now</button>
      
    </div>
  )
}

export default Events