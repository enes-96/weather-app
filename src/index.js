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

    const feelsLikeOutput = document.getElementById("feelsLike");
    feelsLikeOutput.textContent = `Feels like:  ${Math.ceil(
      data.main.feels_like - 273.15
    )} °`;

    const windSpeed = data.wind.speed;
    windSpeedOutput.textContent = `Wind Speed: ${windSpeed} km/h`;

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    sunriseOutput.textContent = `${sunrise.getHours()} : ${sunrise.getMinutes()}`;
    sunsetOutput.textContent = `${sunset.getHours()} : ${sunset.getMinutes()}`;

    const pressure = data.main.pressure;
    pressureOutput.textContent = `Pressure: ${pressure} ph`;

    const humidity = data.main.humidity;
    humidityOutput.textContent = `Humidity: ${humidity} %`;

    const visibility = Math.ceil(data.visibility / 1000);
    visibilityOutput.textContent = `Visibility: ${visibility} km `;

    const lastUpdate = new Date(data.dt * 1000);
    lastUpdateOutput.textContent = `Last Update: ${lastUpdate.getHours()} : ${lastUpdate.getMinutes()}`;

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    cityOutput.textContent = data.name + ", " + data.sys.country;

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
    //
    //
    //
    //
    //
    (function getTomorrowWeather() {
      console.log(data.list[7]);
      //display the name of the day
      const dayOutput1 = document.getElementById("tomorrow");
      const dayName = new Date(data.list[7]["dt_txt"]).toLocaleString("en-US", {
        weekday: "long",
      });
      dayOutput1.textContent = dayName;
      //
      //display weather condition
      const weatherCondition = Math.ceil(data.list[7].main.temp - 273.15);
      const weatherConditionOutput =
        document.getElementById("weatherCondition");
      weatherConditionOutput.textContent = weatherCondition + "°";

      // display cloud status
      const clouds1Output = document.getElementById("cloudsTomorrow");
      const cloudsInfo = data.list[7].weather[0]["description"];
      clouds1Output.textContent = cloudsInfo;

      //display wind speed
      const windSpeed1 = data.list[7].wind.speed;
      const windSpeed1Output = document.getElementById("windSpeedTomorrow");
      windSpeed1Output.textContent = `Wind Speed ${windSpeed1} km/h`;
    })();
    (function getTomorrowWeather2() {
      const dayOutput2 = document.getElementById("tomorrow2");
      const dayName2 = new Date(data.list[15]["dt_txt"]).toLocaleString(
        "en-US",
        {
          weekday: "long",
        }
      );
      dayOutput2.textContent = dayName2;
      //
      const weatherCondition2 = Math.ceil(data.list[15].main.temp - 273.15);
      const weatherConditionOutput2 =
        document.getElementById("weatherCondition2");
      weatherConditionOutput2.textContent = weatherCondition2 + "°";

      //
      const clouds2Output = document.getElementById("cloudsTomorrow2");
      const cloudsInfo2 = data.list[15].weather[0]["description"];
      clouds2Output.textContent = cloudsInfo2;
      //
      const windSpeed2 = data.list[15].wind.speed;
      const windSpeed2Output = document.getElementById("windSpeedTomorrow2");
      windSpeed2Output.textContent = `Wind Speed ${windSpeed2} km/h`;
      //
    })();
    (function getTomorrowWeather3() {
      const dayOutput3 = document.getElementById("tomorrow3");
      const dayName3 = new Date(data.list[23]["dt_txt"]).toLocaleString(
        "en-US",
        {
          weekday: "long",
        }
      );
      dayOutput3.textContent = dayName3;
      //
      const weatherCondition3 = Math.ceil(data.list[23].main.temp - 273.15);
      const weatherConditionOutput3 =
        document.getElementById("weatherCondition3");
      weatherConditionOutput3.textContent = weatherCondition3 + "°";

      //
      const clouds3Output = document.getElementById("cloudsTomorrow3");
      const cloudsInfo3 = data.list[23].weather[0]["description"];
      clouds3Output.textContent = cloudsInfo3;
      //
      const windSpeed3 = data.list[23].wind.speed;
      const windSpeed3Output = document.getElementById("windSpeedTomorrow3");
      windSpeed3Output.textContent = `Wind Speed ${windSpeed3} km/h`;
    })();
    (function getTomorrowWeather4() {
      const dayOutput4 = document.getElementById("tomorrow4");
      const dayName4 = new Date(data.list[31]["dt_txt"]).toLocaleString(
        "en-US",
        {
          weekday: "long",
        }
      );
      dayOutput4.textContent = dayName4;
      //
      const weatherCondition4 = Math.ceil(data.list[31].main.temp - 273.15);
      const weatherConditionOutput4 =
        document.getElementById("weatherCondition4");
      weatherConditionOutput4.textContent = weatherCondition4 + "°";

      //
      const clouds4Output = document.getElementById("cloudsTomorrow4");
      const cloudsInfo4 = data.list[31].weather[0]["description"];
      clouds4Output.textContent = cloudsInfo4;
      //
      const windSpeed4 = data.list[31].wind.speed;
      const windSpeed4Output = document.getElementById("windSpeedTomorrow4");
      windSpeed4Output.textContent = `Wind Speed ${windSpeed4} km/h`;
    })();
    //
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
getWeatherData("Kyoto");
getWeatherForcast("Kyoto");
