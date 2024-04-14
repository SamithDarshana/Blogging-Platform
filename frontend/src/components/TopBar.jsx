import React from "react";
import SearchBar from "./SearchBar";

const TopBar = () => {

  const handleSearch = (searchTerm) => {
    console.log(searchTerm)
  }

  return (
    <div
      className="bg-custom-200 text-white p-2 h-16 w-full
          flex justify-between"
    >
      <div className=" w-1/3 flex justify-between items-center p-1">
        {/* Logo */}
        <div className="container bg-custom-300 w-12 h-10"></div>
        {/* Search bar */}
        <div className="container w-2/3">
        <SearchBar onSearch={handleSearch}/>
        </div>
        
      </div>
      {/* Navigation */}
      <div className=" w-2/5 flex justify-between p-1">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold 
          py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20"
        ></button>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold 
      py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20"
        ></button>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold 
      py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20"
        ></button>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold 
      py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20"
        ></button>
      </div>
    </div>
  );
};

export default TopBar;
