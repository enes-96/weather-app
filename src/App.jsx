import { useState, useEffect } from "react";
import { getWeatherData, getHourlyWeatherData, getAirQuality } from "./utils/api";
import Header from "./components/Header";
import DisplayWeather from "./components/DisplayWeather";
import HourlyWeather from "./components/HourlyWeather";
import DailyWeather from "./components/DailyWeather";
import AirQuality from "./components/AirQuality";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const data = await getWeatherData(city);
      const forecast = await getHourlyWeatherData(city);
      const air = await getAirQuality(data); // Pass weather data instead of city
      setWeatherData(data);
      setForecastData(forecast);
      setAirQuality(air);
    } catch (error) {
      console.error("FetchWeatherData", error);
    }
  };

  useEffect(() => {
    fetchWeatherData("vienna");
  }, []);

  return (
    <div className="h-screen grid place-items-center bg-black overflow-hidden">
      <main className="bg-sky-400 rounded-2xl p-6 overflow-x-hidden">
        <Header onSearch={fetchWeatherData} />
        <DisplayWeather data={weatherData} />
        <div id="weatherGrid" className="grid grid-cols-5 grid-rows-4 ">
          <HourlyWeather hourlyData={forecastData} className={"col-span-5 h-max row-span-1 "} />
          <DailyWeather dailyData={forecastData} className={"bg-red-500 row-start-3 row-end-4 h-max"} />
          <AirQuality airData={airQuality} className="col-start-3 row-start-3 row-end-4" />
        </div>
      </main>
    </div>
  );
};

export default App;
