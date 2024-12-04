import React, { useState, useEffect } from "react";

const ClubPMembers = ({ members }) => {
    return members.map((member, index) => (
        
            <div
                key={index}
                className="w-60 h-[230px] !rounded-2xl shadow-md text-center ">
                <img
                    src={member.Image}
                    alt={member.Name}
                    className="h-[78%]  object-cover mx-auto"
                    
                />
                <div className="bg-black text-white h-[22%] flex items-center justify-center flex-col font-bold">
                    <h4 className="text-2xl font-semibold font-serif">{member.Name}</h4>
                    <p className="text-sm font-serif">{member.Role}</p>
                </div>
            </div>
        
    ));
}

function ClubOMembers({members}) {
    return members.map((member, index) => (
        <div
                key={index}
                className="w-[150px] h-[150px] rounded-full shadow-md flex items-center justify-center">
                <img
                    src={member.Image}
                    alt={member.Name}
                    className="h-[70%] w-[70%] rounded-full object-cover mx-auto"
                />
                
            </div>
        
    ))
} 


const ClubComponent = () => {
    const [clubs, setClubs] = useState([]);
    const [filteredClub, setFilteredClub] = useState("Frontend");

    useEffect(() => {
        const fetchClubsData = async () => {
            const response = await fetch(
                "https://backend-newton-product-non-admin-1.onrender.com/api/clubs"
            );
            const data = await response.json();
            setClubs(data.data);
        };
        fetchClubsData();
    }, []);

    const handleFilterChange = (tech) => {
        setFilteredClub(tech);
    };

    const getClubData = (tech) => {
        return clubs
            .map((club) => club.devclub.find((item) => item.Technology === tech))
            .filter((item) => item);
    };

    const clubData = getClubData(filteredClub);

    return (
        <div className="flex flex-col items-center p-6">
            <div className="text-white text-center text-4xl mt-[2vw] mb-[2vw] heading">Clubs</div>
            <div className="h-[2.2vw] w-[80%]  flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px] pl-[10px] pr-[10px]">
                <button
                    onClick={() => handleFilterChange("Frontend")}
                    className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl "
                >
                    Frontend
                </button>
                <button
                    onClick={() => handleFilterChange("Backend")}
                    className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl"
                >
                    Backend
                </button>
                <button
                    onClick={() => handleFilterChange("Devops")}
                    className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl"
                >
                    Devops
                </button>
                <button
                    onClick={() => handleFilterChange("UI/UX")}
                    className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl"
                >
                    UI/UX
                </button>
                <button
                    onClick={() => handleFilterChange("CyberSecurity")}
                    className=" w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl"
                >
                    CyberSecurity
                </button>
                <button
                    onClick={() => handleFilterChange("mobile")}
                    className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl"
                >
                    iOS/Android
                </button>
                <button
                    onClick={() => handleFilterChange("Blockchain")}
                    className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl"
                >
                    Blockchain
                </button>
            </div>

            <div className="flex w-[50vw] items-center justify-evenly mt-10">
                <ClubPMembers
                    members={clubData.flatMap((club) => [
                        { Name: club.President.Name, Image: club.President.Image, Role: "President" },
                        { Name: club["Vice-President"].Name, Image: club["Vice-President"].Image, Role: "Vice President" }
                    ])}
                    />
            </div>
            <div className="flex items-center justify-center text-white mt-20 text-4xl">CORE MEMBERS</div>
            <div className="flex w-[50vw] items-center justify-evenly mt-10">
                <ClubOMembers
                    members={clubData.flatMap((club) => [
                        { Name: club.Core1.Name, Image: club.Core1.Image, Role: "Core Member 1" },
                        { Name: club.Core2.Name, Image: club.Core2.Image, Role: "Core Member 2" },
                        { Name: club.Core3.Name, Image: club.Core3.Image, Role: "Core Member 3" },
                        { Name: club.Core4.Name, Image: club.Core4.Image, Role: "Core Member 4" }
                    ])}
                    />
            </div>  
        </div>
    );
};

export default ClubComponent;
