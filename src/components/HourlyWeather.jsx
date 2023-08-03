import PropTypes from "prop-types";

const HourlyWeather = ({ hourlyData }) => {
    if (!hourlyData) {
        return <div>No hourly forecast</div>;
    }


    return (
        <div id="forecastList" className="mt-11 mb-6 flex flex-col items-start text-sm text-center w-full p-2 rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold overflow-scroll">
            <h4 className="pl-3 font-light ">Weather Forecast</h4>
            <div id="forecastTitleLine" className="ml-3 m-1 bg-white"></div>
            <div className="">
                <div className="flex gap-2">
                    {hourlyData.list.map((hour, index) => (
                        <div className="h-28 w-12 flex flex-col justify-between p-2 rounded-md " key={index}>
                            <p>{hour.dt_txt.slice(11, 13)}</p>
                            <img
                                src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
                                className="mx-auto h-8"
                            />
                            <p>{Math.floor(hour.main.temp)}°</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

HourlyWeather.propTypes = {
    hourlyData: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                dt_txt: PropTypes.string,
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
};

export default HourlyWeather;
