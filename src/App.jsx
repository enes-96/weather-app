import { useState, useEffect } from "react";
import { getWeatherData, getHourlyWeatherData, getAirQuality } from "./utils/api";
import Header from "./components/Header";
import DisplayWeather from "./components/DisplayWeather";
import HourlyWeather from "./components/HourlyWeather";
import DailyWeather from "./components/DailyWeather";
import AirQuality from "./components/AirQuality";
import FeelsLike from "./components/FeelsLike";
import WindSpeed from "./components/WindSpeed";
import Pressure from "./components/Pressure";
import Humidity from "./components/Humidity";
import Visibility from "./components/Visibility";
import SunSetRise from "./components/SunSetRise";
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
      console.log(data)
      setAirQuality(air);
    } catch (error) {
      console.error("FetchWeatherData", error);
    }
  };

  useEffect(() => {
    fetchWeatherData("vienna");
  }, []);

  return (
    <div className="h-screen grid place-items-center bg-stone-700 overflow-hidden cursor-default">
      <main className="bg-sky-400 rounded-2xl p-6 overflow-hidden">
        <Header onSearch={fetchWeatherData} />
        <DisplayWeather data={weatherData} />
        <div id="weatherGrid" className="grid grid-cols-12 grid-rows-12 gap-4 ">
          <HourlyWeather hourlyData={forecastData} className={"col-span-12 row-span-1 "} />
          <DailyWeather dailyData={forecastData} className={"col-start-1 col-end-5 row-start-2 row-end-4"} />
          <AirQuality airData={airQuality} className="col-start-5 col-end-9 row-start-2 row-end-3 h-32 " />
          <FeelsLike weatherData={weatherData} className="  col-start-9 col-end-11 h-32 32" />
          <WindSpeed weatherData={weatherData} className="  col-start-11 col-end-13 h-32 " />
          <Pressure weatherData={weatherData} className="  col-start-5 col-end-7 h-32 " />
          <Humidity weatherData={weatherData} className="  col-start-7 col-end-9 h-32 " />
          <Visibility weatherData={weatherData} className="  col-start-9 col-end-11 h-32 " />
          <SunSetRise weatherData={weatherData} className="  col-start-11 col-end-13 h-32 " />
        </div>
      </main>
    </div>
  );
};

export default App;
