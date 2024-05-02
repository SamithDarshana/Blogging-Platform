import SearchBar from "./SearchBar"; 
import NavButton from "./NavButton";

const TopBar = () => {
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
  };

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
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {/* Navigation */}
      <div className=" w-1/5 flex justify-between p-1"> 
        <NavButton text="LOG" link="/login"/>
        <NavButton text="CATEGORY" link="/category"/>
        <NavButton text="NEW" link="/new"/> 
      </div>
    </div>
  );
};

export default TopBar;
