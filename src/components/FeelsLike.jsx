import PropTypes from "prop-types";
import { CiTempHigh } from "react-icons/ci"



const FeelsLike = ({ weatherData, className }) => {
    if (!weatherData) {
        return <div>No air quality data available</div>;
    }

    const roundUpData = Math.ceil(weatherData.main.feels_like)

    const weatherHumidity = weatherData.main.humidity

    const description = (weatherHumidity) => {
        if (weatherHumidity < 30) return " feeling Colder"
        if (weatherHumidity > 30 && weatherHumidity < 60) return " actual weather"
        if (weatherHumidity > 60) return "feeling Warmer"
        else ""

    }

    return (
        <div className={` p-3 justify-between  flex flex-col rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`}>
            <div className="flex items-center text-xs gap-2 text-gray-100">
                <CiTempHigh />
                <p>Feels Like</p>
            </div>
            <h3 className="text-2xl">{roundUpData}°</h3>
            <p className="text-xs font-bold">{description(weatherHumidity)}</p>
        </div>
    );
};

FeelsLike.propTypes = {
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            feels_like: PropTypes.number,
            humidity: PropTypes.number,

        }),
    }),
    className: PropTypes.string.isRequired,
};
export default FeelsLike;
