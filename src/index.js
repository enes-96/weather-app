import "./style.css";
const apiKey = "21470b09db88b15cb5af1ae85a5415b1";
const searchLocation = document.getElementById("searchLocation");
const weatherOutputCelcius = document.getElementById("temparature");
const weatherOutputFahrenheit = document.getElementById("temparatureF");
const windSpeedOutput = document.getElementById("wind-speed");
const sunriseOutput = document.getElementById("sunrise");
const sunsetOutput = document.getElementById("sunset");

let userLocation = undefined;
let celsius = 0;
let fahrenheit = 0;
let windSpeed = 0;
let sunrise = 0;
let sunset = 0;

async function getWeatherData(loc) {
  const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
  try {
    const response = await fetch(locationUrl);
    if (!response.ok) throw new Error("Newtork Error");
    const data = await response.json();
    const temperatureKelvin = data.main.temp;

    userLocation = loc;

    celsius = Math.ceil(temperatureKelvin - 273.15);
    fahrenheit = Math.ceil((temperatureKelvin - 273.15) * 1.8 + 32);

    weatherOutputCelcius.textContent = celsius + "°";
    weatherOutputFahrenheit.textContent = fahrenheit + "°f";

    windSpeed = data.wind.speed;
    windSpeedOutput.textContent = windSpeed;

    sunrise = new Date(data.sys.sunrise * 1000);
    sunset = new Date(data.sys.sunset * 1000);

    sunriseOutput.textContent = `${sunrise.getHours()} : ${sunrise.getMinutes()}`;
    sunsetOutput.textContent = `${sunset.getHours()} : ${sunset.getMinutes()}`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

searchLocation.addEventListener("keydown", (e) => {
  if (e.code === "Enter") getWeatherData(searchLocation.value);
});
