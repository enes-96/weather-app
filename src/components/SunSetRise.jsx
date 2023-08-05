import PropTypes from "prop-types";
import { LuSunset } from "react-icons/lu";

const SunSetRise = ({ weatherData, className }) => {
    if (!weatherData) {
        return <div>No air quality data available</div>;
    }

    const sunset = weatherData.sys.sunset
    const sunrise = weatherData.sys.sunrise

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    };


    return (
        <div className={`p-3 justify-between flex flex-col rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`}>
            <div className="flex items-center text-xs gap-2 text-gray-100">
                <LuSunset />
                <p>Sunset</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-2xl">{formatTime(sunset)} </p>
            </div>
            <p className="text-xs">sunrise {formatTime(sunrise)}</p>
        </div>
    );
};

SunSetRise.propTypes = {
    weatherData: PropTypes.shape({
        sys: PropTypes.shape({
            sunrise: PropTypes.number.isRequired,
            sunset: PropTypes.number.isRequired,
        }).isRequired,
    }),
    className: PropTypes.string.isRequired,
};

export default SunSetRise;
