import PropTypes from "prop-types";

const DailyWeather = ({ dailyData }) => {
    if (!dailyData) {
        return <div>No daily forecast</div>;
    }
    console.log(dailyData);

    return (
        <div id="" className=" w-80 mb-6 flex flex-col items-start text-sm p-2 rounded-xl relative bg-opacity-20 text-white bg-black backdrop-blur-3xl font-semibold ov› erflow-scroll">
            <h4 className="pl-3 font-light">Weather Forecast</h4>
            <div id="dayForecastTitle" className="m-1 mx-auto w-full bg-white"></div>
            <div className=" flex flex-col text-sm">
                {dailyData.list.map((day, index) => (
                    <div className="flex justify-between p-1 w-72  items-center border-white border-b" key={index}>
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
        </div>
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
};

export default DailyWeather;
