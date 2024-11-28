import Button from '../buttons/register_btn';


function Navbar() {
    return(
        <>
            <nav className='flex h-[110px] items-center justify-evenly'>
                <div className='text-[40px]'>Logo</div>
                <div className='w-[639px] h-[66px] flex border-[1px] rounded-[30px] bg-white/10 shadow-[0_8px_32px_0_white)] backdrop-blur-[8px] border-white/18" '>
                    <ul className='flex flex-row justify-around items-center w-full'>
                        <li>Home</li>
                        <li>Events</li>
                        <li>Clubs</li>
                        <li>Clans</li>
                    </ul>
                </div>
                <Button/>
            </nav>
        </>
    )
}

export default Navbar;