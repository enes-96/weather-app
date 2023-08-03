import { useState } from "react"
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
    const [city, setCity] = useState("")

    const handleSearch = () => {
        onSearch(city)
    }

    const searchOnEnter = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <header className="flex justify-between text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
            </svg>
            <div className="relative bg-opacity-100 backdrop-blur-lg rounded-md">
                <input type="text" placeholder="Search" className="bg-black bg-opacity-30 placeholder-gray-300 placeholder:font-medium text-white rounded-md py-2 pl-8 pr-4 w-52 focus:outline-none " onChange={(e) => setCity(e.target.value)} onKeyDown={searchOnEnter}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-300" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>

        </header>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Header