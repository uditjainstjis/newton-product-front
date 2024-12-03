import logo from '../../assets/logo.jpg'




function Details() {
    return (
        <>
            <div className='w-[30%] items-center justify-center m-[20px]'>
                <img src={logo} alt=""/>
                
            </div>
            <div className='bg-white/15 backdrop-blur-[15px] rounded-2xl pt-[2px] pb-[2px] pl-[20px] pr-[20px] text-white relative'>29th Feburary, 2050</div>
            <div className='text-white flex justify-evenly w-[60%] m-[20px] h-[q0%] relative'>
                <button className='bg-white text-black pt-[2px] pb-[2px] pl-[20px] pr-[20px] rounded-2xl border-0'>Register Now</button>
                <button className='bg-white/15 backdrop-blur-[15px] rounded-2xl pt-[2px] pb-[2px] pl-[20px] pr-[20px]'>Learn More</button>
            </div>
       </> 
    )
}

export default Details;