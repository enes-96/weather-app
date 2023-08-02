import PropTypes from "prop-types";

const DisplayWeather = ({ data }) => {
    if (!data) {
        return <div>No weather data available</div>;
    }
    const { name, main, weather, wind } = data;

    console.log(Math.ceil(main.temp) * 1)

    return (
        <div className="flex justify-center text-center my-6 ">
            <div className="text-white w-56">
                <h2 className="text-4xl font-light">{name}</h2>
                <h1 className="text-5xl font-light">{main.temp}°C</h1>
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
    )
}

DisplayWeather.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        main: PropTypes.object,
        weather: PropTypes.array,
        wind: PropTypes.object
    }),
};

export default DisplayWeather

