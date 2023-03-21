import "./style.css";
import getWeatherForcast from "./modules/weather-forcast";
import getWeatherData from "./modules/weather-data";

export const apiKey = "21470b09db88b15cb5af1ae85a5415b1";

const searchLocation = document.getElementById("searchLocation");
searchLocation.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    getWeatherData(searchLocation.value);
    getWeatherForcast(searchLocation.value);
  }
});
window.addEventListener("DOMContentLoaded", () => {
  getWeatherData("Osaka");
  getWeatherForcast("Osaka");
});
