import PropTypes from "prop-types";
import { IoWaterOutline } from "react-icons/io5";


const getHumidityDescription = (humidity) => {
    if (humidity < 30) return "Dry";
    if (humidity < 50) return "Moderate";
    if (humidity < 70) return "Humid";
    return "Very Humid";
};


const Humidity = ({ weatherData, className }) => {
    if (!weatherData) {
        return <div>No air quality data available</div>;
    }


    return (
        <div className={`p-3 justify-between flex flex-col rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`}>
            <div className="flex items-center text-xs gap-2 text-gray-100">
                <IoWaterOutline />
                <p>Humidity</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-2xl">{weatherData.main.humidity} </p>
                <span className=" self-end">%</span>
            </div>
            <p className="text-xs">{getHumidityDescription(weatherData.main.humidity)}</p>
        </div>
    );
};

Humidity.propTypes = {
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            humidity: PropTypes.number,
        }),
    }),
    className: PropTypes.string.isRequired,
};

export default Humidity;
