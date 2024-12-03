import NST from '../assets/NSTLogo.svg'
import RU from '../assets/RULogo.svg'

function OrgLogo() {
    return(
        <>
            <div className='flex items-center justify-center h-[10vw] mt-[-3.5vw]'>
                <img src={NST} alt='NST' className='w-[8.5vw] mr-[2vw]'/>
                <img src={RU} alt='RU' className='w-[8.5vw] ml-[2vw]'/>
            </div>
        </>
    );
}

export default OrgLogo;