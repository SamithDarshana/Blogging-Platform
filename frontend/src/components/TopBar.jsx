import SearchBar from "./SearchBar";
import NavButton from "./NavButton";
import {Link} from "react-router-dom";

const TopBar = () => {
  return (
    <div
      className="bg-custom-200 text-white p-2 h-14 w-full
          flex justify-between items-center"
    >
      <div className=" w-1/3 flex items-center p-1">
        {/* Logo */}
        <div className="container  w-12 h-10">
          <Link to={"/"}>
            <img src="Logo.png" alt="Logo" />
          </Link>
        </div>
        {/* Search bar */}
        <div className="container w-2/3 ml-10">
          <SearchBar />
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center -ml-40">
        <h3>Blogger</h3>
      </div>
      {/* Navigation */}
      <div className=" w-1/5 flex justify-between p-1">
        <NavButton text="LOG" link="/login" />
        <NavButton text="CATEGORY" link="/category" />
        <NavButton text="NEW" link="/new" />
      </div>
    </div>
  );
};

export default TopBar;
