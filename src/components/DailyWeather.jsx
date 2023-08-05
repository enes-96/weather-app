import PropTypes from "prop-types";
import { HiCalendarDays } from "react-icons/hi2"

const DailyWeather = ({ dailyData, className }) => {
    if (!dailyData) {
        return <div>No daily forecast</div>;
    }

    // Filter out elements that are located at an index which is a multiple of 8.
    const filteredData = dailyData.list.filter((day, index) => index % 8 === 0);

    return (
        <div id="" className={` p-3 rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl ${className}`} >
            <div className="flex gap-2 items-center text-gray-100 font-light text-xs">
                <HiCalendarDays />
                <h4 className="">Weather Forecast</h4>
            </div>
            <div className="flex flex-col text-sm">
                <div className="flex flex-col items-stretch text-sm">
                    {filteredData.map((day, index) => (
                        <div className={`flex items-center justify-between border-b py-1 ${index === filteredData.length - 1 ? "border-b-0 pb-0" : ''}`} key={index}>
                            <p className=" w-20">{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
                            <img
                                src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                                className="h-8"
                                alt={day.weather[0].description}
                            />
                            <p>{Math.floor(day.main.temp)}°</p>
                        </div>
                    ))}
                </div>

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
