import { useState, useEffect } from "react";
import { getWeatherData, getHourlyWeatherData } from "./utils/api";
import Header from "./components/Header";
import DisplayWeather from "./components/DisplayWeather";
import HourlyWeather from "./components/HourlyWeather";
import DailyWeather from "./components/DailyWeather";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const data = await getWeatherData(city);
      const forecast = await getHourlyWeatherData(city);
      setWeatherData(data);
      setForecastData(forecast);
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
        <HourlyWeather hourlyData={forecastData} />
        <DailyWeather dailyData={forecastData} />
      </main>

    </div>
  );
};

export default App;
