import React from "react";

const RegistrationForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1e1e2e] to-[#11112b]">
      <div className="w-[90%] max-w-[600px] bg-white bg-opacity-10 rounded-2xl p-8 shadow-lg text-center">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">REGISTRATION FORM</h1>
          <div className="flex flex-col items-center">
            <img src="path/to/logo.png" alt="Event Logo" className="w-[100px] mb-4" />
            <p className="text-sm text-white text-opacity-70">29th to 30th November 2024</p>
          </div>
        </div>
        <form className="mt-4">
          <div className="mb-6">
            <label htmlFor="name" className="block font-bold mb-2 text-white text-opacity-80">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-50 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="enrolment" className="block font-bold mb-2 text-white text-opacity-80">
              Enrolment Number
            </label>
            <input
              type="text"
              id="enrolment"
              placeholder="Enter your enrolment no."
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-50 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="clan" className="block font-bold mb-2 text-white text-opacity-80">
              Clan
            </label>
            <select
              id="clan"
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option>Select</option>
              <option>Clan A</option>
              <option>Clan B</option>
              <option>Clan C</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="course" className="block font-bold mb-2 text-white text-opacity-80">
              Course
            </label>
            <select
              id="course"
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option>Select</option>
              <option>Course 1</option>
              <option>Course 2</option>
              <option>Course 3</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-bold mb-2 text-white text-opacity-80">Section</label>
            <div className="flex flex-wrap justify-between">
              {["A", "B", "C", "D", "E"].map((section) => (
                <label key={section} className="flex items-center mb-2 text-white text-opacity-80">
                  <input type="radio" name="section" value={section} className="mr-2" />
                  {section}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="suggestions"
              className="block font-bold mb-2 text-white text-opacity-80"
            >
              Text Area
            </label>
            <textarea
              id="suggestions"
              placeholder="Type your suggestions here"
              className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-50 outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block font-bold mb-2 text-white text-opacity-80">Radio Options</label>
            <div className="flex flex-wrap justify-between">
              {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                <label key={index} className="flex items-center mb-2 text-white text-opacity-80">
                  <input type="radio" name="radio-options" value={index + 1} className="mr-2" />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
