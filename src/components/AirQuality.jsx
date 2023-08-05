import PropTypes from "prop-types";
import { BsSnow } from "react-icons/bs"

const getAqiLabel = (aqi) => {
    if (aqi === 1) return "Good";
    if (aqi === 2) return "Fair";
    if (aqi === 3) return "Moderate";
    if (aqi === 4) return "Poor";
    if (aqi === 5) return "Bad";
    return "Unknown";
};

const AirQuality = ({ airData, className }) => {
    if (!airData) {
        return <div>No air quality data available</div>;
    }

    console.log(airData.list);

    const aqi = airData.list[0].main.aqi;
    const aqiLabel = getAqiLabel(aqi);

    return (
        <div className={`w-80 p-3 h-max flex flex-col rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`}>
            <div className="flex gap-2 items-center text-gray-100 font-light">
                <BsSnow />
                <h4 className="">Air Quality</h4>
            </div>
            <div className="flex items-center gap-2">
                <div className="">{aqi}</div>
                <span>-</span>
                <div className="">{aqiLabel}</div>
            </div>
            <p>The AQI (Air Quality Index) is a standardized way to represent the quality of the air. It ranges from 1 to 5, with each number corresponding to a specific level of air quality</p>
        </div>
    );
};

AirQuality.propTypes = {
    airData: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                main: PropTypes.shape({
                    aqi: PropTypes.number,
                }),
            })
        ),
    }),
    className: PropTypes.string.isRequired,
};

export default AirQuality;
