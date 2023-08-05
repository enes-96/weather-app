import PropTypes from "prop-types";

const DisplayWeather = ({ data }) => {
    if (!data) {
        return <div>No weather data available</div>;
    }

    const { name, main, weather, wind } = data;


    return (
        <div className="flex justify-center text-center ">
            <div className="text-white w-56">
                <h2 className="text-3xl font-light">{name}</h2>
                <h1 className="text-5xl font-extralight">{Math.floor(main.temp)}°</h1>
                <h3 className="text-base font-semibold">{weather[0].description}</h3>
                <div className="flex justify-center gap-2 text-base font-semibold">
                    <div className="flex items-center ">
                        <p>H:</p>
                        <span>{main.humidity} </span>
                    </div>
                    <div className="flex items-center">
                        <p>W:</p>
                        <span>{wind.speed} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayWeather.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        main: PropTypes.shape({
            temp: PropTypes.number,
            humidity: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string,
            })
        ),
        wind: PropTypes.shape({
            speed: PropTypes.number,
        }),
    }),
};

export default DisplayWeather;
