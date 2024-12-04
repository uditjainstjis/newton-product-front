import Chola from '../assets/Chola.svg'
import Maratha from '../assets/MarathaClan.svg'
import Vijaya from '../assets/VijayaClan.svg'
import Raj from '../assets/image 2.svg'

function Clan() {
    return(
    <>
        
        <div id="clans"  className='text-center text-[1.5vw] text-blue-50 mb-[5vh] flex justify-center p-[5px]'>
            
                CLANS
            
        </div>
        <div className="clans flex justify-evenly ml-[5vw] mr-[5vw]">
            <div className='rounded-full h-[12vw] w-[12vw]'><img src={Chola} alt="Chola" className='rounded-full'/></div>
            <div className='rounded-full h-[12vw] w-[12vw]'><img src={Maratha} alt="Maratha" className='rounded-full'/></div>
            <div className='rounded-full h-[12vw] w-[12vw]'><img src={Vijaya} alt="Vijaya" className='rounded-full '/></div>
            <div className='rounded-full h-[12vw] w-[12vw]'><img src={Raj} alt="Rajputana" className='rounded-full '/></div>
        </div>
    </>
    );
}


export default Clan;