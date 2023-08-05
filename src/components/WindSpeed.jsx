import PropTypes from "prop-types";
import { BiWind } from "react-icons/bi";
import {
    HiArrowUp,
    HiArrowUpRight,
    HiArrowRight,
    HiArrowDownRight,
    HiArrowDown,
    HiArrowDownLeft,
    HiArrowLeft,
    HiArrowUpLeft,
} from "react-icons/hi2";

const WindSpeed = ({ weatherData, className }) => {
    if (!weatherData) {
        return <div>No air quality data available</div>;
    }
    const roundUpData = Math.ceil(weatherData.wind.speed);

    const getWindDirection = (degrees) => {
        const directions = [
            HiArrowUp,
            HiArrowUpRight,
            HiArrowRight,
            HiArrowDownRight,
            HiArrowDown,
            HiArrowDownLeft,
            HiArrowLeft,
            HiArrowUpLeft,
        ];
        const index = Math.round(degrees / 45) % 8;
        const ArrowComponent = directions[index]; // Use PascalCase for component variable
        return <ArrowComponent />;
    };

    return (
        <div
            className={`p-3 flex flex-col gap-3 rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`}>
            <div className="flex items-center text-xs gap-2 text-gray-100 ">
                <BiWind />
                <p>Wind</p>
            </div >
            <div className="flex flex-col items-center relative">
                <h3 className="text-4xl z-20 ">{roundUpData}</h3>
                <p className=" z-20">km/h</p>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl z-10 font-extralight text-opacity-30 text-white  rounded-full ">{getWindDirection(weatherData.wind.deg)}</p>

            </div>
        </div>

    );
};

WindSpeed.propTypes = {
    weatherData: PropTypes.shape({
        wind: PropTypes.shape({
            deg: PropTypes.number,
            speed: PropTypes.number,
        }),
    }),
    className: PropTypes.string.isRequired,
};

export default WindSpeed;
