import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineMenu, HiOutlinePlusCircle, HiOutlineTrash } from "react-icons/hi";

const Header = ({ onSearch, onCityClick }) => {
  const [city, setCity] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [savedCities, setSavedCities] = useState(["New York"]);

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

  const addCity = () => {
    const formattedCity = city.trim().toLowerCase();
    if (formattedCity !== "" && !savedCities.some(savedCity => savedCity.toLowerCase() === formattedCity)) {
      setSavedCities([...savedCities, formattedCity]);
      setCity("");
    }
  };

  const deleteCity = (cityToDelete) => {
    const updatedCities = savedCities.filter((city) => city !== cityToDelete);
    setSavedCities(updatedCities);
  };

  return (
    <header className="flex justify-between text-xs relative">
      <HiOutlineMenu
        onClick={toggleMenu}
        className={`text-xl text-gray-100 cursor-pointer z-50 transition-all ${showMenu ? "ml-2 mt-2" : "ml-0 mt-0"}`}
      />
      {showMenu && (
        <div
          id="sidebar"
          className="z-40 absolute top-0 left-0 w-40 bg-gray-100 rounded-lg p-2 overflow-scroll bg-opacity-20 text-white backdrop-blur-xl"
        >
          <ul className="flex flex-col gap-2 mt-9 text-lg">
            {savedCities.map((city) => (
              <li key={city} className="flex items-center gap-6">
                <span className="cursor-pointer w-20 overflow-scroll" onClick={() => handleCityClick(city)}>
                  {city[0].toUpperCase() + city.slice(1)}
                </span>
                <HiOutlineTrash
                  className="ml-2 text-gray-500 cursor-pointer"
                  onClick={() => deleteCity(city)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="relative bg-opacity-100 backdrop-blur-lg rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="bg-black bg-opacity-30 placeholder-gray-300 placeholder:font-medium text-white rounded-md py-2 pl-8 pr-4 w-52 focus:outline-none "
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
        <HiOutlinePlusCircle
          onClick={addCity}
          className={`text-lg absolute top-1/2 transform -translate-y-1/2 right-2 transition-all backdrop-blur-3xl ${city.trim() === ""
            ? "opacity-50 text-white cursor-not-allowed"
            : "opacity-100 text-white cursor-pointer"
            }`}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default Header;
