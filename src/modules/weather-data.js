import { apiKey } from "..";
export default async function getWeatherData(loc) {
  const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
  try {
    const response = await fetch(locationUrl);
    if (!response.ok) throw new Error("Newtork Error");
    const data = await response.json();
    const temperatureKelvin = data.main.temp;

    const celsius = Math.ceil(temperatureKelvin - 273.15);
    const fahrenheit = Math.ceil((temperatureKelvin - 273.15) * 1.8 + 32);

    const weatherOutputCelcius = document.getElementById("temparature");
    weatherOutputCelcius.textContent = celsius + "°";

    const weatherOutputFahrenheit = document.getElementById("temparatureF");
    weatherOutputFahrenheit.textContent = fahrenheit + "°f";

    const feelsLikeOutput = document.getElementById("feelsLike");
    feelsLikeOutput.textContent = `Feels like:  ${Math.ceil(
      data.main.feels_like - 273.15
    )} °`;

    const windSpeed = data.wind.speed;
    const windSpeedOutput = document.getElementById("wind-speed");
    windSpeedOutput.textContent = `Wind : ${windSpeed} km/h`;

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    const sunriseOutput = document.getElementById("sunrise");
    sunriseOutput.textContent = `${sunrise.getHours()} : ${sunrise.getMinutes()}`;
    const sunsetOutput = document.getElementById("sunset");
    sunsetOutput.textContent = `${sunset.getHours()} : ${sunset.getMinutes()}`;

    const pressureOutput = document.getElementById("pressure");
    const pressure = data.main.pressure;
    pressureOutput.textContent = `Pressure: ${pressure} ph`;

    const humidityOutput = document.getElementById("humidity");
    const humidity = data.main.humidity;
    humidityOutput.textContent = `Humidity: ${humidity} %`;

    const visibilityOutput = document.getElementById("visibility");
    const visibility = Math.ceil(data.visibility / 1000);
    visibilityOutput.textContent = `Visibility: ${visibility} km `;

    const lastUpdateOutput = document.getElementById("lastUpdate");
    const lastUpdate = new Date(data.dt * 1000);
    lastUpdateOutput.textContent = `Last Update: ${lastUpdate.getHours()} : ${lastUpdate.getMinutes()}`;

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const cityOutput = document.getElementById("city");
    cityOutput.textContent = data.name + ", " + data.sys.country;
    const conditionOutput = document.getElementById("condition");
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
    const dateOutput = document.getElementById("currentDate");
    const options = { hour: "numeric", minute: "numeric" };
    dateOutput.textContent = `${data.name}, ${localTime.toLocaleTimeString(
      [],
      options
    )}`;
    //
    const weatherEmojiOutput = document.getElementById("weatherEmoji");
    const weatherCode = data.weather[0].id;
    const emojiMap = {
      200: "⛈️",
      201: "⛈️",
      202: "⛈️",
      210: "🌩️",
      211: "🌩️",
      212: "🌩️",
      221: "🌩️",
      230: "⛈️",
      231: "⛈️",
      232: "⛈️",
      300: "🌧️",
      301: "🌧️",
      302: "🌧️",
      310: "🌧️",
      311: "🌧️",
      312: "🌧️",
      313: "🌧️",
      314: "🌧️",
      321: "🌧️",
      500: "🌦️",
      501: "🌦️",
      502: "🌦️",
      503: "🌦️",
      504: "🌦️",
      511: "❄️",
      520: "🌧️",
      521: "🌧️",
      522: "🌧️",
      531: "🌧️",
      600: "❄️",
      601: "❄️",
      602: "❄️",
      611: "❄️",
      612: "❄️",
      613: "❄️",
      615: "❄️",
      616: "❄️",
      620: "❄️",
      621: "❄️",
      622: "❄️",
      701: "🌫️",
      711: "🌫️",
      721: "🌫️",
      731: "🌫️",
      741: "🌫️",
      751: "🌫️",
      761: "🌫️",
      762: "🌋",
      771: "💨",
      781: "🌪️",
      800: "☀️",
      801: "🌤️",
      802: "⛅",
      803: "🌥️",
      804: "☁️",
    };
    const weatherEmoji = emojiMap[weatherCode];
    weatherEmojiOutput.textContent = weatherEmoji;
    ///////////////////
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
