import { useState } from "react";
import PropTypes from "prop-types";
//import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineMenu, HiOutlinePlusCircle } from "react-icons/hi";

const Header = ({ onSearch, onCityClick }) => {
  const [city, setCity] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const handleSearch = () => {
    onSearch(city);
  };

  const searchOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCityClick = (city) => {
    onCityClick(city);
  };

  const savedCities = ["New York", "Los Angeles", "Chicago", "Houston"];

  return (
    <header className="flex justify-between text-xs relative">
      {/*<a
            href="https://github.com/enes-96/weather-app"
            target="_blank"
            rel="noreferrer"
        >
            {" "}
            <FaGithubAlt className="text-xl text-gray-100" />
        </a>
    */}
      <HiOutlineMenu
        onClick={toggleMenu}
        className={`text-xl text-gray-100 cursor-pointer z-50 transition-all ${
          showMenu ? "ml-2 mt-2" : "ml-0 mt-0"
        }`}
      />
      {showMenu && (
        <div
          id="sidebar"
          className="z-40 absolute top-0 left-0 w-40 bg-gray-100 rounded-lg p-2 overflow-scroll bg-opacity-20 text-white bg-black backdrop-blur-xl "
        >
          <ul className="flex flex-col gap-2 mt-9 text-lg">
            {savedCities.map((city) => (
              <li
                key={city}
                className="cursor-pointer"
                onClick={() => handleCityClick(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}{" "}
      <HiOutlinePlusCircle className="text-xl text-gray-100 cursor-pointer" />
      <div className="relative bg-opacity-100 backdrop-blur-lg rounded-md">
        {" "}
        <input
          type="text"
          placeholder="Search"
          className="bg-black bg-opacity-30 placeholder-gray-300 placeholder:font-medium text-white rounded-md py-2 pl-8 pr-4 w-52 focus:outline-none"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={searchOnEnter}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4 absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>{" "}
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default Header;
