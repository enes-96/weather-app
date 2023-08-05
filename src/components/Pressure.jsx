import PropTypes from "prop-types";
import { BsSpeedometer2 } from "react-icons/bs";

const getDescription = (pressure) => {
    if (pressure < 980) return "low pressure";
    if (pressure <= 1050) return "normal pressure";
    return "high pressure";
};

const Pressure = ({ weatherData, className }) => {
    if (!weatherData) {
        return <div>No air quality data available</div>;
    }


    return (
        <div className={`p-3 justify-between flex flex-col rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`}>
            <div className="flex items-center text-xs gap-2 text-gray-100">
                <BsSpeedometer2 />
                <p>Pressure</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-2xl">{weatherData.main.pressure} </p>
                <span className=" self-end">hPa</span>
            </div>
            <p className="text-xs">{getDescription(weatherData.main.pressure)}</p>
        </div>
    );
};

Pressure.propTypes = {
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            pressure: PropTypes.number,
        }),
    }),
    className: PropTypes.string.isRequired,
};

export default Pressure;
