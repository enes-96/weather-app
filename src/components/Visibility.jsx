import PropTypes from "prop-types";
import { HiOutlineEye } from "react-icons/hi2";

const getVisibilityDescription = (visibility) => {
    const visibilityInKm = visibility / 1000; // Convert meters to kilometers
    if (visibilityInKm < 0.5) return "Very Low";
    if (visibilityInKm < 1) return "Low";
    if (visibilityInKm < 5) return "Moderate";
    return "High";
};



const Visibility = ({ weatherData, className }) => {
    if (!weatherData) {
        return <div>No air quality data available</div>;
    }

    const visibility = weatherData.visibility; // Make sure this is the correct property name in your weather data

    return (
        <div className={`p-3 justify-between flex flex-col rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`}>
            <div className="flex items-center text-xs gap-2 text-gray-100">
                <HiOutlineEye />
                <p>Visibility</p>
            </div>
            <div className="flex items-center gap-1">
                <p className="text-2xl">{visibility / 1000} </p>
                <span className="self-end">km</span>
            </div>
            <p className="text-xs">{getVisibilityDescription(visibility)}</p>
        </div>
    );
};

Visibility.propTypes = {
    weatherData: PropTypes.shape({
        visibility: PropTypes.number, // Update the property name if needed
    }),
    className: PropTypes.string.isRequired,
};

export default Visibility;
