import PropTypes from "prop-types";
import { HiCalendarDays } from "react-icons/hi2"

const DailyWeather = ({ dailyData, className }) => {
    if (!dailyData) {
        return <div>No daily forecast</div>;
    }

    // Filter out elements that are located at an index which is a multiple of 8.
    const filteredData = dailyData.list.filter((day, index) => index % 8 === 0);
    return (
        <div id="" className={`w-80 mb-6 flex flex-col items-start text-sm p-2 rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ${className}`} >
            <div className="flex px-2 gap-2 items-center text-gray-100 font-light">
                <HiCalendarDays />
                <h4 className="">Weather Forecast</h4>
            </div>
            <div className="flex flex-col text-sm p-2">
                {filteredData.map((day, index) => (
                    <div className="flex justify-between py-1 w-72 items-center border-white border-b" key={index}>
                        <p>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
                        <img
                            src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                            className="h-8"
                            alt={day.weather[0].description}
                        />
                        <p>{Math.floor(day.main.temp)}°</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

DailyWeather.propTypes = {
    dailyData: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                dt: PropTypes.number,
                main: PropTypes.shape({
                    temp: PropTypes.number,
                }),
                weather: PropTypes.arrayOf(
                    PropTypes.shape({
                        icon: PropTypes.string,
                        description: PropTypes.string,
                    })
                ),
            })
        ),
    }),
    className: PropTypes.string.isRequired
};

export default DailyWeather;
