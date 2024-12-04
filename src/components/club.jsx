import React, { useState, useEffect } from "react";

// Component to display members of the selected club
const ClubMembers = ({ members }) => {
  return members.map((member, index) => (
    <div
      key={index}
      className="w-60 bg-teal-100 rounded-lg p-4 shadow-md text-center"
    >
      <img
        src={member.Image}
        alt={member.Name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
      />
      <h4 className="text-lg font-semibold text-teal-900">{member.Name}</h4>
      <p className="text-sm text-gray-700">{member.Role}</p>
    </div>
  ));
};

// Main Component to display the club information and filter buttons
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
      .filter((item) => item); // Filter out undefined entries
  };

  const clubData = getClubData(filteredClub);

  return (
    <div className="flex flex-col items-center p-6">
        <div className="text-white text-center text-4xl mt-[2vw] mb-[2vw] heading">Clubs</div>
      <div className="flex mb-8">
        <button
          onClick={() => handleFilterChange("Frontend")}
          className="bg-teal-700 text-white px-6 py-2 mx-2 rounded-lg hover:bg-teal-600"
        >
          Frontend
        </button>
        <button
          onClick={() => handleFilterChange("Backend")}
          className="bg-teal-700 text-white px-6 py-2 mx-2 rounded-lg hover:bg-teal-600"
        >
          Backend
        </button>
        <button
          onClick={() => handleFilterChange("Devops")}
          className="bg-teal-700 text-white px-6 py-2 mx-2 rounded-lg hover:bg-teal-600"
        >
          Devops
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ClubMembers
          members={clubData.flatMap((club) => [
            { Name: club.President.Name, Image: club.President.Image, Role: "President" },
            { Name: club["Vice-President"].Name, Image: club["Vice-President"].Image, Role: "Vice President" },
            { Name: club.Core1.Name, Image: club.Core1.Image, Role: "Core Member 1" },
            { Name: club.Core2.Name, Image: club.Core2.Image, Role: "Core Member 2" }
          ])}
        />
      </div>
    </div>
  );
};

export default ClubComponent;
