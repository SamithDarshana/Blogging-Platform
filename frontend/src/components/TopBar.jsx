import SearchBar from "./SearchBar";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div
      className="bg-gradient-to-r from-custom-500 to-custom-600 text-white p-2 h-screen w-full
          flex items-center flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-center w-full h-9">
        <div className=" w-1/3 flex items-center p-1">
          {/* Logo */}
          <div className="container  w-12 h-10 mt-4 text-custom-450 font-extrabold">
            <Link to={"/"}>
              <h3>Blogger</h3>
            </Link>
          </div>
          {/* Search bar */}
          <div className="container w-2/3 ml-10">
            <SearchBar />
          </div>
        </div>
        {/* Navigation */}
        <div className=" w-1/5 flex justify-between p-1">
          <NavButton text="LOG" link="/login" />
          <NavButton text="CATEGORY" link="/category" />
          <NavButton text="NEW" link="/new" />
        </div>
      </div>
      {/* Content */}
      <div className="flex w-full text-custom-700">
        <div className="w-2/3 mt-28 ml-10">
          <h1 className="text-8xl font-bold">START </h1>
          <h1 className="text-9xl font-extrabold mt-10">YOUR BLOG</h1>
          <h1 className="text-8xl font-bold mt-10">HERE</h1>
        </div>
        {/* image */}
        <div className="mt-20">
          <img src="./img.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
