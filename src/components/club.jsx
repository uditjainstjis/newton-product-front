import React, { useState, useEffect } from "react";

// Reusable Button Component
const FilterButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-[30%] h-[80%] flex items-center justify-center cursor-pointer text-xl text-white transition-all duration-150 hover:bg-white hover:text-black rounded-xl"
  >
    {label}
  </button>
);

const ClubPMembers = ({ members }) => {
  return members.map((member, index) => (
    <div key={index} className="w-60 h-[230px] !rounded-2xl shadow-md text-center">
      <img
        src={member.Image}
        alt={member.Name}
        className="h-[78%] object-cover mx-auto"
      />
      <div className="bg-black text-white h-[22%] flex items-center justify-center flex-col font-bold">
        <h4 className="text-2xl font-semibold">{member.Name}</h4>
        <p className="text-sm">{member.Role}</p>
      </div>
    </div>
  ));
};

const ClubOMembers = ({ members }) => {
  return members.map((member, index) => (
    <div
      key={index}
      className="w-[150px] h-[150px] rounded-full shadow-md flex items-center justify-center"
    >
      <img
        src={member.Image}
        alt={member.Name}
        className="h-[70%] w-[70%] rounded-full object-cover mx-auto"
      />
    </div>
  ));
};

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
    <div id="clubs" className="flex flex-col items-center p-6 section-gap">
      <div className="text-white text-center text-5xl mt-[2vw] mb-[2vw] heading">Club</div>
      <div className="h-[2.5vw] w-[85%] flex items-center justify-evenly bg-white/15 backdrop-blur-[15px] shadow-xl rounded-[10px] pl-[50px] pr-[50px] border border-white/20 pt-[2px] pb-[2px]">
        {["Frontend", "Backend", "Devops", "UI/UX", "CyberSecurity", "iOS/Android", "Blockchain"].map((tech) => (
          <FilterButton key={tech} label={tech} onClick={() => handleFilterChange(tech)} />
        ))}
      </div>

      <div className="flex w-[50vw] items-center justify-evenly mt-10">
        <ClubPMembers
          members={clubData.flatMap((club) => [
            { Name: club.President.Name, Image: club.President.Image, Role: "President" },
            { Name: club["Vice-President"].Name, Image: club["Vice-President"].Image, Role: "Vice President" }
          ])}
        />
      </div>

      <div className="flex items-center justify-center text-white mt-20 text-3xl">CORE MEMBERS</div>
      <div className="flex w-[50vw] items-center justify-evenly mt-10">
        <ClubOMembers
          members={clubData.flatMap((club) =>
            [1, 2, 3, 4].map((i) => club[`Core${i}`] ? { Name: club[`Core${i}`].Name, Image: club[`Core${i}`].Image, Role: `Core Member ${i}` } : null).filter(Boolean)
          )}
        />
      </div>
    </div>
  );
};

export default ClubComponent;
