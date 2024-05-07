import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center bg-slate-100 w-56 rounded-xl ">
        <div className="w-52">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            className="focus:outline-none flex h-7 rounded-xl px-4 text-gray-600   bg-slate-100 font-light fons"
            style={{fontSize:"13px"}}
          />
        </div> 
        <div className="right-0 mr-2">
          <CiSearch className="text-black cursor-pointer" />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
