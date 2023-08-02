import { useState, useEffect } from "react";
import getWeatherData from "./utils/api"
import Header from "./components/Header"
import DisplayWeather from "./components/DisplayWeather";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);


  const handleWeatherSearch = async (city) => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data)
    } catch (error) {
      throw new Error("Failed to fetch weather data.");
    }
  };


  useEffect(() => {
    handleWeatherSearch("vienna")
  }, [])

  return (
    <div className="h-screen grid place-items-center bg-black">
      <main className=" bg-sky-400 rounded-2xl p-6">
        <Header onSearch={handleWeatherSearch} />
        <DisplayWeather data={weatherData} />
      </main>
    </div>
  )
}
export default App