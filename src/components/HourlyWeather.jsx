import PropTypes from "prop-types";

const HourlyWeather = ({ hourlyData }) => {
    if (!hourlyData) {
        return <div>No hourly forecast</div>;
    }

    return (
        <div className="bg-blue-300 flex">
            {hourlyData.list.map((hour, index) => (
                <div key={index}>
                    <p>{hour.dt_txt}</p>
                    <img
                        src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
                        alt={hour.weather[0].description}
                        className="mx-auto"
                    />
                    <p>{hour.main.temp}°C</p>
                </div>
            ))}
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
