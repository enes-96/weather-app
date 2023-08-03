import { useState, useEffect } from "react";
import { getWeatherData, getHourlyWeatherData } from "./utils/api";
import Header from "./components/Header";
import DisplayWeather from "./components/DisplayWeather";
import HourlyWeather from "./components/HourlyWeather";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const data = await getWeatherData(city);
      const forecast = await getHourlyWeatherData(city);
      setWeatherData(data);
      setHourlyData(forecast);
    } catch (error) {
      console.error("FetchWeatherData", error);
    }
  };

  useEffect(() => {
    fetchWeatherData("vienna");
  }, []);


  return (
    <div className="h-screen grid place-items-center bg-black">
      <main className="bg-sky-400 rounded-2xl p-6">
        <Header onSearch={fetchWeatherData} />
        <DisplayWeather data={weatherData} />
        <HourlyWeather hourlyData={hourlyData} />
      </main>
    </div>
  );
};

export default App;
