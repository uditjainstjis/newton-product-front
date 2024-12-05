function Footer() {
    return(
        <>
            <hr className="ml-[4vw] mr-[4vw] mt-[10vh] border-[#6E6E6E]"/>
            <div className="flex mt-[4vh] text-[0.875rem]" style={{display: "flex", justifyContent: "space-between", width: "90%", margin:"4vh auto", bottom: "0"}}>
                <div className="text-white flex self-start text-xl">© 2024 NST X RU | Website by the Dev Club</div>
                <div className="text-white flex text-xl gap-[20px]">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </>
    )
}

export default Footer;