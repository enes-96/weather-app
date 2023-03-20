import "./style.css";
const apiKey = "21470b09db88b15cb5af1ae85a5415b1";
const searchLocation = document.getElementById("searchLocation");
const weatherOutputCelcius = document.getElementById("temparature");
const weatherOutputFahrenheit = document.getElementById("temparatureF");
const windSpeedOutput = document.getElementById("wind-speed");
const sunriseOutput = document.getElementById("sunrise");
const sunsetOutput = document.getElementById("sunset");
const pressureOutput = document.getElementById("pressure");
const humidityOutput = document.getElementById("humidity");
const visibilityOutput = document.getElementById("visibility");
const lastUpdateOutput = document.getElementById("lastUpdate");
const cityOutput = document.getElementById("city");
const conditionOutput = document.getElementById("condition");
const dateOutput = document.getElementById("currentDate");

async function getWeatherData(loc) {
  const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
  try {
    const response = await fetch(locationUrl);
    if (!response.ok) throw new Error("Newtork Error");
    const data = await response.json();
    const temperatureKelvin = data.main.temp;

    const celsius = Math.ceil(temperatureKelvin - 273.15);
    const fahrenheit = Math.ceil((temperatureKelvin - 273.15) * 1.8 + 32);

    weatherOutputCelcius.textContent = celsius + "°";
    weatherOutputFahrenheit.textContent = fahrenheit + "°f";

    const windSpeed = data.wind.speed;
    windSpeedOutput.textContent = windSpeed;

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    sunriseOutput.textContent = `${sunrise.getHours()} : ${sunrise.getMinutes()}`;
    sunsetOutput.textContent = `${sunset.getHours()} : ${sunset.getMinutes()}`;

    const pressure = data.main.pressure;
    pressureOutput.textContent = pressure + "ph";

    const humidity = data.main.humidity;
    humidityOutput.textContent = humidity + "%";

    const visibility = Math.ceil(data.visibility / 1000) + "km";
    visibilityOutput.textContent = visibility;

    const lastUpdate = new Date(data.dt * 1000);
    lastUpdateOutput.textContent =
      lastUpdate.getHours() + " : " + lastUpdate.getMinutes();

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    cityOutput.textContent = data.name + ", " + data.sys.country;

    function capitalizeWords(str) {
      return str.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    }

    conditionOutput.textContent = capitalizeFirstLetter(
      data.weather[0]["description"]
    );
    //////////////////
    const timezoneOffset = data.timezone;

    // Calculate the current local time based on the timezone offset and subtract one hour
    const now = new Date();
    const localTime = new Date(
      now.getTime() + timezoneOffset * 1000 - 3600 * 1000
    );

    // Output the local time without seconds
    const options = { hour: "numeric", minute: "numeric" };
    dateOutput.textContent = `${data.name}, ${localTime.toLocaleTimeString(
      [],
      options
    )}`;
    ///////////////////
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
async function getWeatherForcast(loc) {
  const locationUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${apiKey}`;
  try {
    const response = await fetch(locationUrl);
    if (!response.ok) throw new Error("Newtork Error");
    const data = await response.json();
    //
    const dateTomorrow = data.list[7];
    const dateTomorrow2 = data.list[15];
    const dateTomorrow3 = data.list[23];
    const dateTomorrow4 = data.list[31];

    console.log(dateTomorrow);

    //immer 8plus
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
searchLocation.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    getWeatherData(searchLocation.value);
    getWeatherForcast(searchLocation.value);
  }
});
